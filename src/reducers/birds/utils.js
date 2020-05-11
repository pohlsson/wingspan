const mapBird = bird => {
    return {
        id: bird.ID,
        name: bird.EnglishName,
        latinName: bird.ScientificName,
        habitatForest: bird.HabitatForest === 'y',
        habitatField: bird.HabitatGrasslands === 'y',
        habitatWater: bird.HabitatWetlands === 'y',
        foodFish: bird.FoodFish,
        foodFruit: bird.FoodFruit,
        foodInsect: bird.FoodInvertebrate,
        foodRodent: bird.FoodRodent,
        foodSeed: bird.FoodSeed,
        foodWild: bird.FoodWild,
        foodNone: bird.FoodNone
    };
};

export const mapBirds = birds => birds.map(mapBird);
