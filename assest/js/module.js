'use strict';

// Array for weekdays and months
export const weekDayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

export const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Get the correct date with adjusted time zone
export const getDate = (dateUnix, timezone) => {
    // Adjust for the timezone (in seconds)
    const date = new Date((dateUnix + timezone) * 1000);
    
    // Get the correct weekday name and month name from the arrays
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()} ${monthName}`;
};

// Get the correct time (HH:MM AM/PM)
export const getTime = (timeUnix, timezone) => {
    // Adjust for the timezone (in seconds)
    const date = new Date((timeUnix + timezone) * 1000);
    
    // Get the hours and minutes in UTC
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    
    // Determine AM/PM
    const period = hours >= 12 ? "PM" : "AM";
    
    return `${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
};

// Get only the hours in AM/PM format
export const getHours = (timeUnix, timezone) => {
    // Adjust for the timezone (in seconds)
    const date = new Date((timeUnix + timezone) * 1000);
    
    // Get the hours in UTC
    const hours = date.getUTCHours();
    
    // Determine AM/PM
    const period = hours >= 12 ? "PM" : "AM";
    
    return `${hours % 12 || 12} ${period}`;
};

// Convert meters per second (m/s) to kilometers per hour (km/h)
export const mps_to_kmh = mps => {
    const kmh = mps * 3600 / 1000;
    return kmh;
};

// AQI levels and messages
export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk."
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3: {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
    },
    5: {
        level: "Very Poor",
        message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
    }
};
