document.addEventListener("DOMContentLoaded", function () {
    var currentNutImage = "peanut-12.png";
    var currentFruitImage = "apple.png";
    var nutImageElement = document.getElementById("myImage");
    var fruitImageElement = document.getElementById("fruitImage");
    var nutNutritionInfoElement = document.getElementById("nutritionInfo");
    var fruitNutritionInfoElement = document.getElementById("fruitNutritionInfo");

    nutImageElement.src = currentNutImage;
    fruitImageElement.src = currentFruitImage;
    updateNutritionInfo(currentNutImage);
    updateFruitNutritionInfo(currentFruitImage);

    function changeImage(nutImageName) {
        nutImageElement.src = nutImageName;
        updateNutritionInfo(nutImageName);
    }

    function changeFruitImage(fruitImageName) {
        fruitImageElement.src = fruitImageName;
        updateFruitNutritionInfo(fruitImageName);
    }

    function updateNutritionInfo(nutImageName) {
        var nutritionText = '';

        switch (nutImageName) {
            case 'almond.png':
                nutritionText = "Almond 100g Nutrition\n Calories: 575\nProtein(g): 21.2\nFiber(g): 12.2\nCalcium(mg): 264";
                break;
            case 'cashew.png':
                nutritionText = "Cashew 100g Nutrition\n Calories: 574\nProtein(g): 15.3\nFiber(g): 3\nCalcium(mg): 45";
                break;
            case 'pistachio.png':
                nutritionText = "Pistachio 100g Nutrition\n Calories: 567\nProtein(g): 20.9\nFiber(g): 9.9\nCalcium(mg): 107";
                break;
            case 'peanut-12.png':
                nutritionText = "Peanut 100g Nutrition\nCalories: 585\nProtein(g): 23.7\nFiber(g): 8\nCalcium(mg): 54";
                break;
            default:
                nutritionText = "Nutrition information not available";
                break;
        }

        nutNutritionInfoElement.textContent = nutritionText;
    }

    function updateFruitNutritionInfo(fruitImageName) {
        var fruitNutritionText = '';

        switch (fruitImageName) {
            case 'apple.png':
                fruitNutritionText = "Apple Nutrition\nCalories: 52\nCarbohydrates(g): 14\nFiber(g): 2.4\nVitamin C(mg): 0.5";
                break;
            case 'banana.png':
                fruitNutritionText = "Banana Nutrition\nCalories: 105\nCarbohydrates(g): 27\nFiber(g): 3\nVitamin C(mg): 10";
                break;
            case 'grapes.png':
                fruitNutritionText = "Grape Nutrition\nCalories: 69\nCarbohydrates(g): 18\nFiber(g): 0.9\nVitamin C(mg): 0.6";
                break;
            case 'orange.png':
                fruitNutritionText = "Orange Nutrition\nCalories: 43\nCarbohydrates(g): 8.3\nFiber(g): 2.4\nVitamin C(mg): 30";
                break;
            default:
                fruitNutritionText = "Nutrition information not available";
                break;
        }

        fruitNutritionInfoElement.textContent = fruitNutritionText;
    }

    document.getElementById("pea").addEventListener("click", function () {
        changeImage('peanut-12.png');
    });

    document.getElementById("pist").addEventListener("click", function () {
        changeImage('pistachio.png');
    });

    document.getElementById("cashew").addEventListener("click", function () {
        changeImage('cashew.png');
    });

    document.getElementById("almond").addEventListener("click", function () {
        changeImage('almond.png');
    });

    document.getElementById("apple").addEventListener("click", function () {
        changeFruitImage('apple.png');
    });

    document.getElementById("banana").addEventListener("click", function () {
        changeFruitImage('banana.png');
    });

    document.getElementById("grape").addEventListener("click", function () {
        changeFruitImage('grapes.png');
    });

    document.getElementById("orange").addEventListener("click", function () {
        changeFruitImage('orange.png');
    });
    var currentMeatImage = "steak.png";
    var meatImageElement = document.getElementById("meatImage");
    var meatNutritionInfoElement = document.getElementById("meatNutritionInfo");

    meatImageElement.src = currentMeatImage;
    updateMeatNutritionInfo(currentMeatImage);

    function changeMeatImage(meatImageName) {
        meatImageElement.src = meatImageName;
        updateMeatNutritionInfo(meatImageName);
    }

    function updateMeatNutritionInfo(meatImageName) {
        var meatNutritionText = '';

        switch (meatImageName) {
            case 'steak.png':
                meatNutritionText = "Steak 100g Nutrition\nCalories: 250\nProtein(g): 26\nFat(g): 17\nIron(mg): 2.1";
                break;
            case 'chicken_breast.png':
                meatNutritionText = "Chicken Breast 100g Nutrition\nCalories: 165\nProtein(g): 31\nFat(g): 3.6\nIron(mg): 0.7";
                break;
            case 'pork.png':
                meatNutritionText = "Pork 100g Nutrition\nCalories: 143\nProtein(g): 25\nFat(g): 4.4\nIron(mg): 0.9";
                break;
            default:
                meatNutritionText = "Nutrition information not available";
                break;
        }

        meatNutritionInfoElement.textContent = meatNutritionText;
    }

    document.getElementById("steak").addEventListener("click", function () {
        changeMeatImage('steak.png');
    });

    document.getElementById("chicken").addEventListener("click", function () {
        changeMeatImage('chicken_breast.png');
    });

    document.getElementById("pork").addEventListener("click", function () {
        changeMeatImage('pork.png');
    });
    var currentVegetableImage = "carrot.png";
    var vegetableImageElement = document.getElementById("vegetableImage");
    var vegetableNutritionInfoElement = document.getElementById("vegetableNutritionInfo");

    vegetableImageElement.src = currentVegetableImage;
    updateVegetableNutritionInfo(currentVegetableImage);

    function changeVegetableImage(vegetableImageName) {
        vegetableImageElement.src = vegetableImageName;
        updateVegetableNutritionInfo(vegetableImageName);
    }

    function updateVegetableNutritionInfo(vegetableImageName) {
        var vegetableNutritionText = '';

        switch (vegetableImageName) {
            case 'carrot.png':
                vegetableNutritionText = "Carrot Nutrition<br>Calories: 41<br>Carbohydrates(g): 10<br>Fiber(g): 2.8<br>Vitamin A(IU): 16706";
                break;
            case 'corn.png':
                vegetableNutritionText = "Corn Nutrition<br>Calories: 96<br>Carbohydrates(g): 19<br>Fiber(g): 2.7<br>Vitamin C(mg): 6.3";
                break;
            case 'tomato.png':
                vegetableNutritionText = "Tomato Nutrition<br>Calories: 18<br>Carbohydrates(g): 4<br>Fiber(g): 1.5<br>Vitamin C(mg): 9.7";
                break;
            case 'broccoli.png':
                vegetableNutritionText = "Broccoli Nutrition<br>Calories: 55<br>Carbohydrates(g): 11<br>Fiber(g): 3.7<br>Vitamin C(mg): 89.2";
                break;
            case 'potato.png':
                vegetableNutritionText = "Potato Nutrition<br>Calories: 130<br>Carbohydrates(g): 30<br>Fiber(g): 3<br>Vitamin C(mg): 19.7";
                break;
            default:
                vegetableNutritionText = "Nutrition information not available";
                break;
        }

        vegetableNutritionInfoElement.innerHTML = vegetableNutritionText;
    }

    document.getElementById("carrot").addEventListener("click", function () {
        changeVegetableImage('carrot.png');
    });

    document.getElementById("corn").addEventListener("click", function () {
        changeVegetableImage('corn.png');
    });

    document.getElementById("tomato").addEventListener("click", function () {
        changeVegetableImage('tomato.png');
    });

    document.getElementById("broccoli").addEventListener("click", function () {
        changeVegetableImage('broccoli.png');
    });

    document.getElementById("potato").addEventListener("click", function () {
        changeVegetableImage('potato.png');
    });
    var currentGrainImage = "rice.png";
    var grainImageElement = document.getElementById("grainImage");
    var grainNutritionInfoElement = document.getElementById("grainNutritionInfo");

    grainImageElement.src = currentGrainImage;
    updateGrainNutritionInfo(currentGrainImage);

    function changeGrainImage(grainImageName) {
        grainImageElement.src = grainImageName;
        updateGrainNutritionInfo(grainImageName);
    }

    function updateGrainNutritionInfo(grainImageName) {
        var grainNutritionText = '';

        switch (grainImageName) {
            case 'rice.png':
                grainNutritionText = "Rice 100g Nutrition<br>Calories: 130<br>Carbohydrates(g): 28<br>Fiber(g): 0.6<br>Protein(g): 2.7";
                break;
            case 'wheat.png':
                grainNutritionText = "Wheat 100g Nutrition<br>Calories: 339<br>Carbohydrates(g): 72<br>Fiber(g): 12.2<br>Protein(g): 13.2";
                break;
            case 'oat.png':
                grainNutritionText = "Oat 100g Nutrition<br>Calories: 389<br>Carbohydrates(g): 66<br>Fiber(g): 10.6<br>Protein(g): 16.9";
                break;
            case 'barley.png':
                grainNutritionText = "Barley 100g Nutrition<br>Calories: 354<br>Carbohydrates(g): 73<br>Fiber(g): 17.3<br>Protein(g): 12.5";
                break;
            default:
                grainNutritionText = "Nutrition information not available";
                break;
        }

        grainNutritionInfoElement.innerHTML = grainNutritionText;
    }

    document.getElementById("rice").addEventListener("click", function () {
        changeGrainImage('rice.png');
    });

    document.getElementById("wheat").addEventListener("click", function () {
        changeGrainImage('wheat.png');
    });

    document.getElementById("oat").addEventListener("click", function () {
        changeGrainImage('oat.png');
    });

    document.getElementById("barley").addEventListener("click", function () {
        changeGrainImage('barley.png');
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
