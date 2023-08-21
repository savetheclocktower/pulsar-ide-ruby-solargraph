const solargraph = require('solargraph-utils');
const {AutoLanguageClient} = require('atom-languageclient');
const net = require('net');
const Path = require('path');

const ROOT = Path.normalize(Path.join(__dirname, '..'));

class RubyLanguageClient extends AutoLanguageClient {
  getGrammarScopes() { return ['source.ruby'] }
  getLanguageName() { return 'Ruby' }
  getServerName() { return 'Ruby Solargraph' }
  getConnectionType() { return 'socket' }

  getPackageName () {
    return Path.basename(ROOT) ?? 'pulsar-ide-ruby-solargraph';
  }

  startServerProcess() {
    return new Promise((resolve) => {
      let configuration = new solargraph.Configuration();
      configuration.commandPath = atom.config.get('pulsar-ide-ruby-solargraph.commandPath');
      if (atom.project.getDirectories().length > 0) {
        configuration.workspace = atom.project.getDirectories()[0].getPath();
      }
      let provider = new solargraph.SocketProvider(configuration);
      let that = this;
      provider.start().then(() => {
        var socket = net.createConnection(provider.port, () => {
          that.socket = socket;
          resolve(provider.process);
        });
      });
    });
  }

  filterChangeWatchedFiles(filepath) {
    return filepath.endsWith('.rb') || filepath.endsWith('.gemspec') || filepath.endsWith('Gemfile')
  }

  provideAutocomplete() {
    const provide = super.provideAutocomplete();
    return provide;
  }

}

module.exports = new RubyLanguageClient();
