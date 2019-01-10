const planet1 = document.querySelector(".planet1");
const planet2 = document.querySelector(".planet2");
window.addEventListener("scroll", () => {
  if (window.scrollY < window.screen.height) {
    planet1.style.transform = `translate3d(0, ${window.scrollY / 2.75}px, 0)`;
    planet2.style.transform = `translate3d(0, -${window.scrollY / 3.2}px, 0)`;
  }
});


console.log(
  " -yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy-\n",
  "-yyyyyyyyyyyyyyyyyys    syyyyyyyyyyyyyyyyyy-\n",
  "-MMMMMMMMMMMMMMM           NMMMMMMMMMMMMMMM-\n",
  "-MMMMMMMMMMMN        _         MMMMMMMMMMMM-\n",
  "-MMMMMMMMmhs      shmMNmy       ydNMMMMMMMM-\n",
  "-MMMMNdy       ydNN      NNhs      shmMMMMM-\n",
  "-Mmhs      shmN             NNdy       ydNM-\n",
  "-       ydNNdy                ymNNds      s-\n",
  "-    hNMmhs                      shNMmy    -\n",
  "-   sMN      ssssss      ssssss     sMm    -\n",
  "-   sMm      MMMMMMm    mMMMMMM      Mm    -\n",
  "-   sMm      MMMMMMMMMMMMMMMMMM      Mm    -\n",
  "-   sMm      MMMMMMMMMMMMMMMMMM      Mm    -\n",
  "-   sMm      MMMN          NMMM      Mm    -\n",
  "-   sMm      MMMMMMM    MMMMMMM      Mm    -\n",
  "-   sMm      MMMMMMM    MMMMMMM      Mm    -\n",
  "-   sMm      MMMMMMM    MMMMMMM      Mm    -\n",
  "-   sMm      MMMMMMM    MMMMMMM      Mm    -\n",
  "-    dNNdy                        ymMNh    -\n",
  "-      shNMmh                 shNMdy       -\n",
  "-Ndy       hdNNds          ymNNds       ydN-\n",
  "-MMMMmh       shmMmys  shNMmy       shmMMMM-\n",
  "-MMMMMMMNds       ymMNMNhs       ymMMMMMMMM-\n",
  "-MMMMMMMMMMMmys      ^       shNMMMMMMMMMMM-\n",
  "-MMMMMMMMMMMMMMNdy        ydNMMMMMMMMMMMMMM-\n",
  "-ddddddddddddddddddy///shdddddddddddddddddd-\n",
  "-dddddddddddddddddddddddddddddddddddddddddd-\n",
  '\n',
  "Do you like code as much as I do?\n",
  "Check out mine at https://github.com/manatran\n",
  "Or send me an email at manaustransez@hotmail.com for more information."
);