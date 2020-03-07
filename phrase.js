let phrase=
"Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital . Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com . Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 . mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911 Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com . "
let partie=phrase.split(/[ ' ,]/)
console.log(partie)

//numero 1
const adressemail = partie.filter((mail)=>{
    return mail.includes('@');
 });
 console.log(adressemail);

//numero 2
const numero = partie.filter((number)=>{
   return number.startsWith('+243');
});
console.log(numero);

//numero 3
 const numerovodacom = partie.filter((number)=>{
    return number.startsWith('+24381');
 });
 if (numerovodacom.length ==0){
     console.log('pas de numero téléphonique vodacom')
 }
 else{ 
 console.log(numerovodacom);
}
//numero 4
let numerotigo=numero.filter((tigo)=>{
    return tigo.startsWith('+24389');
});
if( numerotigo.length=1)
{
console.log(numerotigo+" c'est un numero tigo");
}
else{
    console.log('')
}

//numero 5
let numeroorange=numero.filter((orange)=>{
    return orange.startsWith('+24384');
});
if( numeroorange.length=1)
{
console.log(numeroorange+" c'est un numero orange");
}
else{
    console.log('')
}
//numero6
let mprofessionnelle= adressemail.filter((messagerie)=>{ 
return messagerie.includes('@kinshasa');
});
console.log(mprofessionnelle)

//numero 7
let mprive= adressemail.filter((prive)=>{
    return prive.includes('@gmail');
});
console.log(mprive)

//numero 8

var listeMotsRestreints = ['le', 'la', 'les', 'des', 'du', 'un', 'une', '+243', '@', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'elles', 'ils', 'à', 'qui', 'de', 'l', 'j', 'd'];
let a ;
a = partie.filter(mot => !(listeMotsRestreints.includes(mot)));
console.log(a.length)