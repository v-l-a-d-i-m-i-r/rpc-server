import convict from 'convict';

const config = convict({
  HTTP_PORT: {
    doc: 'The http port to bind.',
    format: 'port',
    default: 80,
    env: 'HTTP_PORT',
  },
});

config.validate({ allowed: 'strict' });

export default config;
