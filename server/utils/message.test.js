var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from  = 'Jen';
    var text = 'Hello World';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toEqual('number');
    expect(message).toMatchObject({from,text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () =>{
    var from  = 'Jen';
    var latitude = 123;
    var longitude = 456;
    var url = 'https://www.google.com/maps?q=123,456';
    var message = generateLocationMessage(from, latitude, longitude);
    expect(typeof message.createdAt).toEqual('number');
    expect(message).toMatchObject({from,url});
    expect(message.url).toBe('https://www.google.com/maps?q=123,456');

  });
});
