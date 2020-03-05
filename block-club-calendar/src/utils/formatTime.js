const formatTime = (event) => {
  const formatStart = new Date(event.eventStart);
  const formatEnd = new Date(event.eventEnd);

  if (formatStart.getHours() > 12 && formatEnd.getHours() > 12) {
    const newStart = formatStart.getHours() - 12;
    const newEnd = formatEnd.getHours() - 12;

    if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
      if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        return `${newStart}:0${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${newStart}:0${formatStart.getMinutes()}PM-${newEnd}:${formatEnd.getMinutes()}PM`;
      };
    } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        return `${newStart}:0${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${newStart}:${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
      };
    } else {
      return `${newStart}:${formatStart.getMinutes()}PM-${newEnd}:${formatEnd.getMinutes()}PM`;
    };
  } 
  
  else if (formatEnd.getHours() > 12) {
    const newEnd = formatEnd.getHours() - 12;

    if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
      if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${newEnd}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${newEnd}:${formatEnd.getMinutes()}PM`;
      };
    } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${newEnd}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${newEnd}:0${formatEnd.getMinutes()}PM`;
      };
    } else {
      return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${newEnd}:${formatEnd.getMinutes()}PM`;
    };
  } 
  
  else if (formatStart.getHours() === 12 && formatEnd.getHours() === 12) {
    if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
      if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${formatEnd.getHours()}:${formatEnd.getMinutes()}PM`;
      };
    } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}PM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
      };
    } else {
      return `${formatStart.getHours()}:${formatStart.getMinutes()}PM-${formatEnd.getHours()}:${formatEnd.getMinutes()}PM`;
    };
  }

  else if (formatStart.getHours() === 12) {
    const newEnd = formatEnd.getHours() - 12;

    if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
      if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${newEnd}:${formatEnd.getMinutes()}PM`;
      };
    } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}PM-${newEnd}:0${formatEnd.getMinutes()}PM`;
      };
    } else {
      return `${formatStart.getHours()}:${formatStart.getMinutes()}PM-${newEnd}:${formatEnd.getMinutes()}PM`;
    };
  }

  else if (formatEnd.getHours() === 12) {
    if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
      if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:${formatEnd.getMinutes()}PM`;
      };
    } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}PM`;
      };
    } else {
      return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${formatEnd.getHours()}:${formatEnd.getMinutes()}PM`;
    };
  }

  else {
    if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
      if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}AM`;
      } else {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:${formatEnd.getMinutes()}AM`;
      };
    } else if (formatEnd.getMinutes() === 0 || formatEnd.getMinutes() < 10) {
      if (formatStart.getMinutes() === 0 || formatStart.getMinutes() < 10) {
        return `${formatStart.getHours()}:0${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}AM`;
      } else {
        return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${formatEnd.getHours()}:0${formatEnd.getMinutes()}AM`;
      };
    } else {
      return `${formatStart.getHours()}:${formatStart.getMinutes()}AM-${formatEnd.getHours()}:${formatEnd.getMinutes()}AM`;
    };
  }
};

export default formatTime;