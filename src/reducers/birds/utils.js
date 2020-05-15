const mapBird = bird => {
    return {
        id: bird.ID,
        name: bird.EnglishName,
        latinName: bird.ScientificName,
        habitatForest: bird.HabitatForest === 'y',
        habitatField: bird.HabitatGrasslands === 'y',
        habitatWater: bird.HabitatWetlands === 'y',
        foodFish: parseInt(bird.FoodFish),
        foodFruit: parseInt(bird.FoodFruit),
        foodInsect: parseInt(bird.FoodInvertebrate),
        foodRodent: parseInt(bird.FoodRodent),
        foodSeed: parseInt(bird.FoodSeed),
        foodWild: parseInt(bird.FoodWild),
        foodNone: parseInt(bird.FoodNone),
        eggLimit: parseInt(bird.EggLimit)
    };
};

export const mapBirds = birds => birds.map(mapBird);
