describe('shout(string)', function shout(string) {
return string.toUpperCase();
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})

describe('whisper(string)', function whisper(string) {
  return string.toLowerCase();
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})

describe('logShout(string)', function logShout(string) {
  console.log(string.toUpperCase());
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

describe('logWhisper(string)', function logWhisper(string) {
  console.log(string.toLowerCase()); 
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

describe('sayHiToGrandma(string)', function sayHiToGrandma(string) {
  if string.toLowerCase === (string) {
  return "I can\'t hear you!"; 
  
  if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})