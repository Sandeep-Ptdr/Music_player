# Music Player Web Application

This web application is a simple music player built using HTML, CSS, and JavaScript. It allows users to play, pause, and navigate through a list of songs.

## Features

- Display a list of available songs with their corresponding images.
- Play and pause the selected song.
- Navigate forward and backward through the songs.
- Display the current time and duration of the playing song.
- Seek through the song using a seek bar.

## Files and Directories

- `index.html`: The main HTML file that includes the structure of the web page.
- `styles.css`: The CSS file for styling the web page.
- `script.js`: The JavaScript file containing the logic for the music player.
- `./songs/`: A directory containing the song files.
- `./images/`: A directory containing the images for the songs.

## Setup and Usage

1. **Clone the Repository:**

    ```sh
    git clone <repository-url>
    ```

2. **Navigate to the Project Directory:**

    ```sh
    cd <project-directory>
    ```

3. **Open `index.html` in a Web Browser:**

    Simply open the `index.html` file in your preferred web browser to use the music player.

## Code Explanation

### HTML

The HTML file includes the basic structure of the web page, with a container for displaying the songs and a player section.

### CSS

The CSS file provides the styling for the web page, ensuring a visually appealing layout.

### JavaScript

The JavaScript file (`script.js`) contains the following key functions and event listeners:

- **Array of Songs:**

    ```javascript
    var arr = [
        { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
        { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
        { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
        { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" },
        { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" }
    ]
    ```

- **Function to Display Songs:**

    ```javascript
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
    ```

- **Function to Format Time:**

    ```javascript
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60)
        var secs = Math.floor(seconds % 60)
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }
    ```

- **Event Listeners for Player Controls:**

    - **Play/Pause:**

        ```javascript
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
        ```

    - **Forward:**

        ```javascript
        forward.addEventListener("click", function () {
            if (selectedSong < arr.length - 1) {
                play.innerHTML = `<i class="ri-pause-line"></i>`
                selectedSong++
                currentSongUrl()
                showMusic()
                audio.play()
                backward.style.opacity = 1
            } else {
                forward.style.opacity = 0.45
            }
        })
        ```

    - **Backward:**

        ```javascript
        backward.addEventListener("click", function () {
            if (selectedSong > 0) {
                play.innerHTML = `<i class="ri-pause-line"></i>`
                selectedSong--
                currentSongUrl()
                showMusic()
                audio.play()
                forward.style.opacity = 1
            } else {
                backward.style.opacity = 0.45
            }
        })
        ```

    - **Seek Bar:**

        ```javascript
        seekbar.addEventListener("click", function (dets) {
            let percent = (dets.offsetX / dets.target.getBoundingClientRect().width) * 100;
            document.querySelector(".circle").style.left = percent + "%"
            audio.currentTime = ((audio.duration) * percent) / 100
        })
        ```


## Note
Ensure that the paths to the songs and images are correct. The provided example assumes the songs are in the ./songs/       directory and images are in the ./images/ directory.

## License
This project is open-source and available under the MIT License.


