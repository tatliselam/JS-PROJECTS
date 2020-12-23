function getRandEvent (){
  const random =Math.floor(Math.random()*3)+1; 
    switch (random){
      case 1:
     return 'Marathon';
      
      break;
       case 2:
      return 'Triathlon';
     
      break;
    case 3:
     return 'Pentathlon';
      
      break;
    }
  }
  
  
   
  //let event=getRandEvent();
     //console.log(event); 
  function getTrainingDays (event) {
   let days;
  if ( event==='Marathon'){
    days=50;
  }else if( event==='Triathlon'){
   days=75;
    }else if ( event==='Pentathlon'){
      days=100
    }
  // decide the day according to the condition, write a conditional;
  
  return days;
  }
  //console.log(getTrainingDays(event),event)
  
  function logEvent (name,event){
    
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name,days) => {
    
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  
  const name='zubeyir';
  logEvent(name,event);
  logTime(name,days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  
  const name2='Ali';
  logEvent(name2,event2);
  logTime(name2,days2);
  
  