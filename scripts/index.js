document.getElementById("searchBtn").addEventListener('click',fetchData);
        function fetchData()
        {
            var movieName=document.getElementById("movieName").value;
            getData(movieName);
           
        }
        async function getData(movieName)
        {   
        try{
            let res=await fetch(`http://www.omdbapi.com/?apikey=a1c70b42&s=${movieName}`);
            let data=await res.json();
            console.log(data);
            displayData(data);
            }
        catch(error)
            {
                console.log("error ", error);
            }
        }
        function displayData(movieData)
        {
            movieData.Search.forEach(element => {
                var movieCard=document.createElement('div');
                var poster=document.createElement('img');
                poster.src=element.Poster;
                var title=document.createElement('h2');
                title.textContent=element.Title;
                var year=document.createElement('h3');
                year=element.Year;
                movieCard.append(poster,title,year);
                document.getElementById("container").append(movieCard);
                
            });
        }