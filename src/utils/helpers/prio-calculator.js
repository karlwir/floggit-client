const calculatePrio = (item, higherPrioItem, lowerPrioItem) => {
  if (higherPrioItem && lowerPrioItem) {
    const higherPrio = higherPrioItem.priority;
    const lowerPrio = lowerPrioItem.priority;
    return higherPrio + ((lowerPrio - higherPrio) / 2);
  } else if (higherPrioItem && !lowerPrioItem) {
    const higherPrio = higherPrioItem.priority;
    return higherPrio * 2;
  } else if (!higherPrioItem && lowerPrioItem) {
    const lowerPrio = lowerPrioItem.priority;
    return lowerPrio / 2;
  }
  return item.priority;
};

export { calculatePrio };
export default calculatePrio;
