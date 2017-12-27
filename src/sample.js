const gnar = 'gnarly';

const info = ({file=__filename, dir=__dirname}) =>
  <p>{dir}: {file}</p>
;

console.log(info);

switch(gnar) {
  default:
    console.log('gnarley');
    break;
}
