(function(){
    var width = 1500, height = 700;
    var svg = d3.select('#chart')
    .append("svg")
    .attr("height",height)
    .attr("width",width)
    .append("g")
    .attr("transform","translate(0,0)")
    
    var div = d3.select("body").append("div")
     .attr("class", "info")
     .attr("ID","ddiv")
     .style("opacity", 0);
    // making them of variable sizes


    var defs = svg.append("defs");
    var radiusScale = d3.scaleSqrt().domain([6744837,42861515]).range([18,77])
    
    var forceCollide = d3.forceCollide(function(d){
        return radiusScale(d.Streams)+1.5; 
    })
    var forceCollide2 = d3.forceCollide(function(d){
        return radiusScale(d.Streams)*2; 
    })
    var forceX = d3.forceX(function(d){
        if(d.Position<= 30)
            return width/4
        else
            return 3*width/4
    }).strength(0.08)
    var forceXcombine = d3.forceX(function(d){
        if(d.Position<= 30)
            return width/2-40
        else
            return width/2+40
    }).strength(0.05)
    var forceY = d3.forceY(function(d){
        return height/2
    }).strength(0.08)
    var forceYSplit = d3.forceY(function(d){
        if(d.Position>0 && d.Position<31)
            return height/2
        if(d.Position>30 && d.Position<100)
            return height/2+ 20
        else if(d.Position>=100 && d.Position<150)
            return height/4 
        else 
            return (3*height/4)+15
    }).strength(0.05)
    var forceYrandom = d3.forceY(function(d){
        return Math.random()*height
    }).strength(0.05)
    var forceXRandom = d3.forceX(function(d){
        if(d.Position>0 && d.Position<31)
            return Math.random()*width/2
        else
            return Math.random()*width/2 +width/2
    }).strength(0.5)
    var simulation = d3.forceSimulation()
    .force("x", forceXRandom)
    .force("y", forceYrandom)
    .force("collide",forceCollide)
    .alphaTarget(0.5)


    // to position our circle
    d3.queue().defer(d3.csv,"tracks.csv").await(ready)

    function ready (error, datapoints) {
        //defining patter for every album cover
        defs.selectAll(".artist-pattern")
        .data(datapoints)
        .enter().append("pattern")
        .attr("class","artist-pattern")
        .attr("id",function(d){
            return d.Position;
        })
        .attr("height","100%")
        .attr("width","100%")
        .attr("patternContentUnits","objectBoundingBox")
        .append("image")
        .attr("height",1)
        .attr("width",1)
        .attr("preserveAspectRatio","none")
        .attr("xmlns:xlink","http://www.w3.org/1999/xlink")
        .attr("xlink:href",function(d){
            return d.Images;
        });
        // making different circles
        var circles = svg.selectAll(".TrackName")
        .data(datapoints)
        .enter().append("circle")
        .attr("class", "artist")
        .attr("r",function(d){
            return radiusScale(d.Streams); // scaling them based on their Streams
        })
        .attr("fill",function(d){
            return "url(#"+d.Position+")"; //setting custom ids 
        })
        .attr("cx",100)
        .attr("cy",300)
        .on('click', function(d){

            window.open(d.URL);
        })
        .on('mouseover',function(d, i){
            d.Streams*=2;
            d3.select(this).transition()
            .duration('50')
            .attr('opacity','.85')
            .attr("r",function(d){
                return radiusScale(d.Streams); // scaling them based on their Streams
            });
            // d3.select(this).rotate(30);
            div.transition()
            .duration(50)
            .style("opacity", 1);
            var img = document.createElement("IMG");
            // img.src= d.Images
            var url = d.Images
            img.src=url
            var image = new Image();
            image.src = url;
            image.width = 150

            
            div.html("")
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
            var div2 = document.getElementById("ddiv");
            div2.innerHTML = `<div><div> <img src = ${d.Images} style="width : 150px"> </div><div class="test1" >#${d.Position} ${d.TrackName} </div>
            <div class="test1" >${d.Artist} </div>
            <div class="test1" >${d.Streams/2} Streams </div>
            </div>`
            // div2.appendChild(h)
            // .appendChild(image);

            simulation
            .force("collide",forceCollide);
        })
        .on('mouseout',function(d,i){
            d.Streams/=2;
            d3.select(this).transition()
            .duration('50')
            .attr('opacity','1')
            .attr("r",function(d){
                return radiusScale(d.Streams); // scaling them based on their Streams
            });

            div.transition()
            .duration(50)
            .style("opacity", 0);
            simulation
            .force("collide",forceCollide);
            
        })
        
        d3.select("#combine").on('click',function(){
        
            simulation
            .force("x",forceXcombine)
            .alphaTarget(0.5)
            .restart()

            simulation
            .force("y",forceY)
            .alphaTarget(0.05)
            .restart()

            

        })
        d3.select("#split").on('click',function(){
     
            simulation
            .force("y",forceYSplit)
            .alphaTarget(0.5)
            .restart()
            simulation
            .force("x",forceX)
            .alphaTarget(0.5)
            .restart()
            simulation
            .force("collide",forceCollide)
            .alphaTarget(0.25)
        })
        d3.select("#restart").on('click',function(){
            simulation
            .force("y",forceYrandom)
            .alphaTarget(0.5)
            simulation
            .force("x",forceXRandom)
            .alphaTarget(0.5)
        })
        simulation.nodes(datapoints)
        .on('tick',ticked)

        function ticked(){
            circles
            .attr("cx", function(d){
                return d.x
            })
            .attr("cy", function(d){
                return d.y
            })
        }
    }
    
    simulation
    .force("y",forceYrandom)
    .force("x",forceXRandom)
    // .alphaTarget(0.5)
})();

