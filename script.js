
document.addEventListener("DOMContentLoaded", function () {




    var arr = [
        { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
        { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
        { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
        { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" },
        { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    ]


    let audio = new Audio()
    let selectedSong = 0
    let play = document.querySelector("#play")
    let forward = document.querySelector("#forward")
    let backward = document.querySelector("#backward")
    let flag = 0
    let seekbar = document.querySelector(".seekbar")

    function showMusic() {
        clutter = ""
        arr.forEach(function (song, idx) {
            clutter += `<div class="song-card" id="${idx}">
                    <div class="part1">
                        <img src="${song.img}" alt="">
                        <h2>${song.songName}</h2>
                    </div>
                     
                 </div>`


        })

        document.querySelector("#all-songs").innerHTML = clutter

        document.querySelector("#left").style.backgroundImage = `url(${arr[selectedSong].img})`

    }
    
    
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60)
        var secs = Math.floor(seconds % 60)
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }
    
    
    function currentSongUrl() {
        audio.src = arr[selectedSong].url
    }

    audio.addEventListener("loadedmetadata", function () {

        audio.addEventListener("timeupdate", function () {
            document.querySelector("#player > .currentSongName").textContent = arr[selectedSong].songName
            document.querySelector("#player h6").textContent = `${formatTime(audio.currentTime)}/${formatTime(audio.duration)}`

           document.querySelector(".circle").style.left = (audio.currentTime/audio.duration)*100 + "%"
             

            

        })

    })


    seekbar.addEventListener("click",function(dets){
        let percent = (dets.offsetX/dets.target.getBoundingClientRect().width)*100;
        document.querySelector(".circle").style.left = percent + "%"
        audio.currentTime = (( audio.duration)*percent)/100

        

    })

   





    document.querySelector("#all-songs").addEventListener("click", function (dets) {
        selectedSong = dets.target.id
        currentSongUrl()
        play.innerHTML = `<i class="ri-pause-line"></i>`
        showMusic()
        audio.play()
        


    })


    play.addEventListener("click", function () {
        if (flag == 1) {
            play.innerHTML = `<i class="ri-pause-line"></i>`
            showMusic()
            audio.play()
            flag = 0


        }
        else {
            play.innerHTML = `<i class="ri-play-line"></i>`
            showMusic()
            audio.pause()
            flag = 1

        }
    })
    forward.addEventListener("click", function () {
        if (selectedSong < arr.length - 1) {
            play.innerHTML = `<i class="ri-pause-line"></i>`
            selectedSong++
            currentSongUrl()
            showMusic()
            audio.play()
            backward.style.opacity = 1
        }
        else {
            forward.style.opacity = 0.45

        }
    })


    backward.addEventListener("click", function () {
        if (selectedSong > 0) {
            play.innerHTML = `<i class="ri-pause-line"></i>`
            selectedSong--
            currentSongUrl()
            showMusic()
            audio.play()
            forward.style.opacity = 1

        }
        else {
            backward.style.opacity = 0.45

        }

    })

   







    showMusic()

})
