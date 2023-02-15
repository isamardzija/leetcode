// Input je uvijek niz od najmanje dva cijela brojeva
// Returnati broj

// PSEUDO

var maxArea = function (height) {
  let prviBroj = 1;
  let drugiBroj = 1;
  let indexPrvog = 0;
  let indexDrugog = 1;
  // Iz zadanog niza, izvlačimo dva najveća broja
  //te njihove indexe
  height.forEach((element, i) => {
    if (element > prviBroj) {
      prviBroj = element;
      indexPrvog = i;
    } else if (
      (element > drugiBroj && element < prviBroj) ||
      prviBroj === drugiBroj
    ) {
      drugiBroj = element;
      indexDrugog = i;
    }
  });
  // Množimo manji od ta dva broja sa razlikom njihovih indexa unutar niza
  let razlika = indexDrugog - indexPrvog;
  // Returnamo taj zbroj
  let zbroj = razlika * drugiBroj;
  return zbroj;
};

if (maxArea([1, 1]) === 1) {
  console.log("Test 1 - uspješan");
}

if (maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49) {
  console.log("Test 2 - uspješan");
}
