var gorbs = {
  gorb1: {
    top: 10,
    left: 10
  },
  gorb2: {
    top: 40,
    left: 15
  },
  gorb3: {
    top: 50,
    left: 33
  },
  gorb4: {
    top: 22,
    left: 40
  },
  gorb5: {
    top: 39,
    left: 44
  },
  gorb6: {
    top: 27,
    left: 58
  },
  gorb7: {
    top: 53,
    left: 55
  },
  gorb8: {
    top: 13,
    left: 72
  },
  gorb9: {
    top: 30,
    left: 85
  },
  gorb10: {
    top: 7,
    left: 90
  }
};

//
// var plusOrMinus = function() {
//   return Math.random() < 0.5 ? -1 : 1;
// };
//
// for (i = 0; i < 10; i++) {
//   var top1 = gorbs['gorb' + (i + 1)]['top'];
//   var top = gorbs['gorb' + (i + 1)]['top'];
//   var left1 = gorbs['gorb' + (i + 1)]['left']
//   var left = gorbs['gorb' + (i + 1)]['left']
//
//   console.log(
//     '@keyframes flightPath' + (i + 1) + ' {\n' +
//       '0%   {top:' + top1 + '%; left:' + left1 + '%;}\n' +
//       '12%   {top:' + (top += -1 ) + '%; left:' + (left += 1) + '%;}\n' +
//       '25%   {top:' + (top += 1) + '%; left:' + (left += 1) + '%;}\n' +
//       '37%   {top:' + (top += 1) + '%; left:' + (left += 1) + '%;}\n' +
//       '50%   {top:' + (top += -1) + '%; left:' + (left += 1) + '%;}\n' +
//       '62%   {top:' + (top += -1) + '%; left:' + (left += -1) + '%;}\n' +
//       '75%   {top:' + (top += 1) + '%; left:' + (left += -1) + '%;}\n' +
//       '87%   {top:' + (top += 1) + '%; left:' + (left += -1) + '%;}\n' +
//       '100%   {top:' + top1 + '%; left:' + left1 + '%;}\n' +
//     '}'
//   );
// }
