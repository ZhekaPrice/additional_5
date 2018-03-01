module.exports = function check(str, bracketsConfig) {
  // your solution
  var OpenArr = [];
  for(var i = 0; i < 5; i++)
    if ((bracketsConfig[i] != undefined)&&(bracketsConfig[i].length > 0))
      OpenArr.push(bracketsConfig[i][0]);

  var CloseArr = [];
  for(var j = 0; j < 5; j++)
    if((bracketsConfig[j] != undefined)&&(bracketsConfig[j].length > 0))
      CloseArr.push(bracketsConfig[j][1]);

  var TempArr = [];
  for (var k = 0; k < str.length; k++)
  {
    for (var n = 0; n < OpenArr.length; n++)
    {
      if (str[k] == OpenArr[n])
        TempArr.push(str[k]);
      if (str[k] == CloseArr[n])
        TempArr.pop(str[k]);
    };
  };

  if (TempArr == 0)
    return true;
  else
    return false;
}
