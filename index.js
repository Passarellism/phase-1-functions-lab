function distanceFromHqInBlocks(distance){
    const block = 42
    if (distance == 42) {
        return( distance );
    } else if (distance > 42){
        return ( distance - 42 );
         } else if (distance < 42){
            return ( 42 - distance );
         }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination){
   return Math.abs((destination - start) * 264 );
}

function calculatesFarePrice(start, destination){
    const totalDistance = distanceTravelledInFeet(start, destination);
    if (totalDistance <= 400) {
        return 0;
    } else if (totalDistance > 400 && totalDistance < 2000) {
        return ((totalDistance - 400) * 0.02 )
    } else if (totalDistance > 2000 && totalDistance < 2500) {
        return 25;
    } else {
        return `cannot travel that far`
    }
}