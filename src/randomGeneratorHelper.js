export const randomChar=()=>
{
const chars="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
const randomChar=chars.charAt(Math.floor(Math.random()*chars.length));
console.log(randomChar);
return randomChar;
};