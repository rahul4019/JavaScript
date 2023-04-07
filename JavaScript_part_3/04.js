//** Callbacks , Callback hell, Pyramid of doom */
// Asynchronous programming

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7'); 

/* 
const changeHeading = () => {
  heading1.textContent = 'Heading 1';
  heading1.style.color = 'green';
  setTimeout(() => {
    heading2.textContent = 'Heading 2';
    heading2.style.color = 'purple';
  }, 1000);
};
 */
// setTimeout(changeHeading, 1000);

function changeText(
  element,
  text,
  color,
  time,
  onSuccessCallback,
  onFailureCallback
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      if (onFailureCallback) {
        onFailureCallback();
      }
    }
  }, time);
}

// *** PYRAMID of doom

// changeText(
//   heading1,
//   'one',
//   'green',
//   2000,
//   () => {
//     changeText(
//       heading2,
//       'two',
//       'orange',
//       1000,
//       () => {
//         changeText(
//           heading3,
//           'three',
//           'violet',
//           1000,
//           () => {
//             changeText(heading4,
//               'four',
//               'red',
//               1000,
//               () => {
//                 changeText(heading5,
//                   'five',
//                   'purple',
//                   1000,
//                   () => {
//                     changeText(heading6,
//                       'five',
//                       'gray',
//                       1000,
//                       () => {
//                         changeText(heading7,
//                           'six',
//                           'yellow',
//                           1000,
//                           () => {
//                             changeText(
//                               'seven',
//                               'blue',
//                               1000,
//                               () => {
//                                 console.log('Finaly, end of this mess!');
//                               },
//                               () => {
//                                 console.log('Heading7 does not exist');
//                               }
//                             );
//                           },
//                           () => {
//                             console.log("Heading6 doesn't exist");
//                           }
//                         );
//                       },
//                       () => {
//                         console.log("Heading5 doesn't exist");
//                       }
//                     );
//                   },
//                   () => {
//                     console.log("Heading4 doesn't exist");
//                   }
//                 );
//               },
//               () => {
//                 console.log("Heading4 doesn't exist");
//               }
//             );
//           },
//           () => {
//             console.log("Heading3 doesn't exist");
//           }
//         );
//       },
//       () => {
//         console.log("Heading2 doesn't exist");
//       }
//     );
//   },
//   () => {
//     console.log("Heading1 doesn't exist");
//   }
// );

