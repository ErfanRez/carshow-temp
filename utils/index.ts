import { CarProps,FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    
    const { manufacturer, year, model, fuel, limit} = filters
    
    const headers = {
        'X-RapidAPI-Key': '3ef05a4254msh013daa5d416c927p18baffjsnfbea2d96d4ee',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }



    const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?
    make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });

    const result = await response.json();

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

//   export const generateCarImageUrl = (car: CarProps, angle? : string) => {
    
//   } ** No car image Api found for free!

export const updateSearchParams = (type: string, value: string) => {
    
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    searchParams.set(type, value)

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
}