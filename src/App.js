import "./styles.css";
import React, { useState } from "react";

//const userName = prompt("Please enter your name");
const userName = "User";
const emojiDictionary = {
  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": " Grinning Face with Smiling Eyes",
  "๐": " Beaming Face with Smiling Eyes",
  "๐": " Grinning Squinting Face",
  "๐": " Grinning Face with Sweat",
  "๐คฃ": " Rolling on the Floor Laughing",
  "๐": " Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": " Upside-Down Face",
  "๐": " Winking Face",
  "๐": " Smiling Face with Smiling Eyes",
  "๐": " Smiling Face with Halo",
  "๐ฅฐ": " Smiling Face with Hearts",
  "๐": " Smiling Face with Heart-Eyes",
  "๐คฉ": " Star-Struck",
  "๐": " Face Blowing a Kiss",
  "๐": " Kissing Face",
  "โบ๏ธ": " Smiling Face",
  "๐": " Kissing Face with Closed Eyes",
  "๐": " Kissing Face with Smiling Eyes",
  "๐ฅฒ": " Smiling Face with Tear",
  "๐": " Face Savoring Food",
  "๐": " Face with Tongue",
  "๐": " Winking Face with Tongue",
  "๐คช": " Zany Face",
  "๐": " Squinting Face with Tongue",
  "๐ค": " Money-Mouth Face",
  "๐ค": " Hugging Face",
  "๐คญ": " Face with Hand Over Mouth",
  "๐คซ": " Shushing Face",
  "๐ค": " Thinking Face",
  "๐ค": " Zipper-Mouth Face",
  "๐คจ": " Face with Raised Eyebrow",
  "๐": " Neutral Face",
  "๐": " Expressionless Face",
  "๐ถ": " Face Without Mouth",
  "๐ถโ๐ซ๏ธ": " Face in Clouds",
  "๐": " Smirking Face",
  "๐": " Unamused Face",
  "๐ ": "Face with Rolling Eyes",
  "๐ฌ": " Grimacing Face",
  "๐ฎโ๐จ": " Face Exhaling",
  "๐คฅ": " Lying Face",
  "๐": " Relieved Face",
  "๐": " Pensive Face",
  "๐ช": " Sleepy Face",
  "๐คค": " Drooling Face",
  "๐ด": " Sleeping Face",
  "๐ค": " Face with Thermometer",
  "๐ค": " Face with Head-Bandage",
  "๐คข": " Nauseated Face",
  "๐คฎ": " Face Vomiting",
  "๐คง ": "Sneezing Face",
  "๐ฅต": " Hot Face",
  "๐ฅถ": " Cold Face",
  "๐ฅด": " Woozy Face",
  "๐ต": " Dizzy Face",
  "๐ตโ๐ซ": " Face with Spiral Eyes",
  "๐คฏ": " Exploding Head",
  "๐ค?": " Cowboy Hat Face",
  "๐ฅณ": " Partying Face",
  "๐ฅธ": " Disguised Face",
  "๐": " Smiling Face with Sunglasses",
  "๐ค": " Nerd Face",
  "๐ง": " Face with Monocle",
  "๐": " Confused Face",
  "๐": " Worried Face",
  "๐": " Slightly Frowning Face",
  "โน๏ธ ": "Frowning Face",
  "๐ฎ": " Face with Open Mouth",
  "๐ฏ": " Hushed Face",
  "๐ฒ": " Astonished Face",
  "๐ณ": " Flushed Face",
  "๐ฅบ": " Pleading Face",
  "๐ฆ": " Frowning Face with Open Mouth",
  "๐ง": " Anguished Face",
  "๐จ": " Fearful Face",
  "๐ฐ": " Anxious Face with Sweat",
  "๐ฅ": " Sad but Relieved Face",
  "๐ข": " Crying Face",
  "๐ญ": " Loudly Crying Face",
  "๐ฑ": " Face Screaming in Fear",
  "๐": " Confounded Face",
  "๐ฃ": " Persevering Face",
  "๐": " Disappointed Face",
  "๐": " Downcast Face with Sweat",
  "๐ฉ": " Weary Face",
  "๐ซ": " Tired Face",
  "๐ฅฑ": " Yawning Face",
  "๐ค": " Face with Steam From Nose",
  "๐ก": " Pouting Face",
  "๐?": " Angry Face",
  "๐คฌ": " Face with Symbols on Mouth",
  "๐": " Smiling Face with Horns",
  "๐ฟ": " Angry Face with Horns",
  "๐": " Skull",
  "โ?": "Skull and Crossbones",
  "๐ฉ": " Pile of Poo",
  "๐คก": " Clown Face",
  "๐น": " Ogre",
  "๐บ": " Goblin",
  "๐ป": " Ghost",
  "๐ฝ": " Alien",
  "๐พ": " Alien Monster",
  "๐ค": " Robot",
  "๐บ": " Grinning Cat",
  "๐ธ": " Grinning Cat with Smiling Eyes",
  "๐น": " Cat with Tears of Joy",
  "๐ป": " Smiling Cat with Heart-Eyes",
  "๐ผ": " Cat with Wry Smile",
  "๐ฝ": " Kissing Cat",
  "๐": " Weary Cat",
  "๐ฟ": " Crying Cat",
  "๐พ": " Pouting Cat",
  "๐": " Kiss Mark",
  "๐": " Waving Hand",
  "๐ค": " Raised Back of Hand",
  "๐๏ธ": " Hand with Fingers Splayed",
  "โ": " Raised Hand",
  "๐": " Vulcan Salute",
  "๐": " OK Hand",
  "๐ค": " Pinched Fingers",
  "๐ค": " Pinching Hand",
  "โ": " Crossed Fingers",
  "๐ค": " Love-You Gesture",
  "๐ค": " Sign of the Horns",
  "๐ค": " Call Me Hand",
  "๐": " Backhand Index Pointing Left",
  "๐": " Backhand Index Pointing Right",
  "๐": " Backhand Index Pointing Up",
  "๐": " Middle Finger",
  "๐": " Backhand Index Pointing Down",
  "โ๏ธ": " Index Pointing Up",
  "๐": " Thumbs Up",
  "๐": " Thumbs Down",
  "โ": " Raised Fist",
  "๐": " Oncoming Fist",
  "๐ค": " Left-Facing Fist",
  "๐ค": " Right-Facing Fist",
  "๐": " Clapping Hands",
  "๐": " Raising Hands",
  "๐": " Open Hands",
  "๐คฒ": " Palms Up Together",
  "๐ค": " Handshake",
  "๐": " Folded Hands",
  "โ๏ธ": " Writing Hand",
  "๐": " Nail Polish",
  "๐คณ": " Selfie",
  "๐ช": " Flexed Biceps",
  "๐ฆพ": " Mechanical Arm",
  "๐ฆฟ": " Mechanical Leg",
  "๐ฆต": " Leg",
  "๐ฆถ": " Foot",
  "๐": " Ear",
  "๐ฆป": " Ear with Hearing Aid",
  "๐": " Nose",
  "๐ง?": " Brain",
  "๐ซ": " Anatomical Heart",
  "๐ซ": " Lungs",
  "๐ฆท": " Tooth",
  "๐ฆด": " Bone",
  "๐": " Eyes",
  "๐๏ธ": " Eye",
  "๐": " Tongue",
  "๐": " Mouth",
  "๐ถ": " Baby",
  "๐ง": " Child",
  "๐ฆ": " Boy",
  "๐ง": " Girl",
  "๐ง": " Person",
  "๐ฑ": " Person: Blond Hair",
  "๐จ": " Man",
  "๐ง": " Person: Beard",
  "๐จโ๐ฆฐ": "Man: Red Hair",
  "๐จโ๐ฆฑ": " Man: Curly Hair",
  "๐จโ๐ฆณ": " Man: White Hair",
  "๐จโ๐ฆฒ": " Man: Bald",
  "๐ฉ": " Woman",
  "๐ฉโ๐ฆฐ": " Woman: Red Hair",
  "๐งโ๐ฆฐ": " Person: Red Hair",
  "๐ฉโ๐ฆฑ": " Woman: Curly Hair",
  "๐งโ๐ฆฑ": " Person: Curly Hair",
  "๐ฉโ๐ฆณ": " Woman: White Hair",
  "๐งโ๐ฆณ": " Person: White Hair",
  "๐ฉโ๐ฆฒ": " Woman: Bald",
  "๐งโ๐ฆฒ": " Person: Bald",
  "๐ฑโโ๏ธ": " Woman: Blond Hair",
  "๐ฑโโ๏ธ": "Man: Blond Hair",
  "๐ง": " Older Person",
  "๐ด": " Old Man",
  "๐ฉณ": "Shorts",
  "๐": " Bikini",
  "๐": "Womanโs Clothes",
  "๐": "Purse",
  "๐": "Handbag",
  "๐": " Clutch Bag",
  "๐": " Backpack",
  "๐ฉด": " Thong Sandal",
  "๐": "Manโs Shoe",
  "๐": "Running Shoe",
  "๐ฅพ": " Hiking Boot",
  "๐ฅฟ": " Flat Shoe",
  "๐?": "High-Heeled Shoe",
  "๐ก": "Womanโs Sandal",
  "๐ฉฐ": "Ballet Shoes",
  "๐ข": "Womanโs Boot",
  "๐": "Crown",
  "๐": "Womanโs Hat",
  "๐ฉ": "Top Hat",
  "๐": "Graduation Cap",
  "๐งข": "Billed Cap",
  "๐ช": "Military Helmet",
  "โ๏ธ": "Rescue Workerโs Helmet",
  "๐": "Lipstick",
  "๐": "Ring",
  "๐ผ": "Briefcase",
  "๐ฉธ": "Drop of Blood",
};

const emo = Object.keys(emojiDictionary);
export default function App() {
  //const [likeCounter, setLikeCounter] = useState(0);
  // function searchFunction() {
  //   var newlikeCounter = likeCounter + 1;
  //   setLikeCounter(newlikeCounter);
  // }

  const [emojiInput, setEmojiInput] = useState("");
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event) {
    //console.log(event.target.value);
    var newEmojiInput = event.target.value;
    var newEmojiMeaning = emojiDictionary[newEmojiInput];
    setEmojiInput(newEmojiInput);

    if (newEmojiMeaning === undefined) {
      newEmojiMeaning = "We do not have this in our database.";
    } else {
      newEmojiMeaning = "Meaning is " + newEmojiMeaning;
    }
    setEmojiMeaning(newEmojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var newEmojiMeaning = emojiDictionary[emoji];
    setEmojiInput(emoji);
    setEmojiMeaning(newEmojiMeaning);
  }

  return (
    <div className="App">
      <h1>Welcome, {userName}</h1>
      <h2>Look for the right Emoji here!</h2>
      <input onChange={emojiInputHandler}></input>
      <h4> you searched for {emojiInput}</h4>
      <h4> {emojiMeaning}</h4>

      {/* <button onClick={searchFunction}> Hit if you liked it! xD </button>
      <h3> Total number of likes : {likeCounter} </h3> */}
      <hr />
      <h1> Choose from an emoji to find the meaning! </h1>
      {emo.map((emoji) => {
        return (
          <span
            style={{ padding: "1rem", margin: "auto", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
