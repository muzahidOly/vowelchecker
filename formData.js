function formdata()
    {
        let text=document.getElementById("textName").value;
     
        text=text.toUpperCase();
        var numOfVowel=0;
      
        for(var i=0;i<text.length;i++)


            {
                if (text[i]=='A'||text[i]=='E'||text[i]=='I'||text[i]=='O'||text[i]=='U')
                numOfVowel++;
            }
 
        alert("Number of vowels in this text is "+numOfVowel);
       
        
 

    }