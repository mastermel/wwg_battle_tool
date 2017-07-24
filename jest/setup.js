/* eslint no-undef: 0 */

const consoleFrd = global.console;

global.console = {
  error: (message) => {
    if (!/^Warning: /.test(message)) {
      consoleFrd.error(message);
    }
  },
  
  warn: consoleFrd.warn,
};


jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
}));
