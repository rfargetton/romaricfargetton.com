export const formatDate = ( date ) => {
  
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric" 
  }) ;

  return formattedDate;

};
