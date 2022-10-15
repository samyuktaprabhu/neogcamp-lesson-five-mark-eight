import "./styles.css";
import React, { useState } from "react";

//const userName = prompt("Please enter your name");
const userName = "SuperGirlSam";
const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "☺️": " Smiling Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",
  "🥲": " Smiling Face with Tear",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Hugging Face",
  "🤭": " Face with Hand Over Mouth",
  "🤫": " Shushing Face",
  "🤔": " Thinking Face",
  "🤐": " Zipper-Mouth Face",
  "🤨": " Face with Raised Eyebrow",
  "😐": " Neutral Face",
  "😑": " Expressionless Face",
  "😶": " Face Without Mouth",
  "😶‍🌫️": " Face in Clouds",
  "😏": " Smirking Face",
  "😒": " Unamused Face",
  "🙄 ": "Face with Rolling Eyes",
  "😬": " Grimacing Face",
  "😮‍💨": " Face Exhaling",
  "🤥": " Lying Face",
  "😌": " Relieved Face",
  "😔": " Pensive Face",
  "😪": " Sleepy Face",
  "🤤": " Drooling Face",
  "😴": " Sleeping Face",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": " Nauseated Face",
  "🤮": " Face Vomiting",
  "🤧 ": "Sneezing Face",
  "🥵": " Hot Face",
  "🥶": " Cold Face",
  "🥴": " Woozy Face",
  "😵": " Dizzy Face",
  "😵‍💫": " Face with Spiral Eyes",
  "🤯": " Exploding Head",
  "🤠": " Cowboy Hat Face",
  "🥳": " Partying Face",
  "🥸": " Disguised Face",
  "😎": " Smiling Face with Sunglasses",
  "🤓": " Nerd Face",
  "🧐": " Face with Monocle",
  "😕": " Confused Face",
  "😟": " Worried Face",
  "🙁": " Slightly Frowning Face",
  "☹️ ": "Frowning Face",
  "😮": " Face with Open Mouth",
  "😯": " Hushed Face",
  "😲": " Astonished Face",
  "😳": " Flushed Face",
  "🥺": " Pleading Face",
  "😦": " Frowning Face with Open Mouth",
  "😧": " Anguished Face",
  "😨": " Fearful Face",
  "😰": " Anxious Face with Sweat",
  "😥": " Sad but Relieved Face",
  "😢": " Crying Face",
  "😭": " Loudly Crying Face",
  "😱": " Face Screaming in Fear",
  "😖": " Confounded Face",
  "😣": " Persevering Face",
  "😞": " Disappointed Face",
  "😓": " Downcast Face with Sweat",
  "😩": " Weary Face",
  "😫": " Tired Face",
  "🥱": " Yawning Face",
  "😤": " Face with Steam From Nose",
  "😡": " Pouting Face",
  "😠": " Angry Face",
  "🤬": " Face with Symbols on Mouth",
  "😈": " Smiling Face with Horns",
  "👿": " Angry Face with Horns",
  "💀": " Skull",
  "☠": "Skull and Crossbones",
  "💩": " Pile of Poo",
  "🤡": " Clown Face",
  "👹": " Ogre",
  "👺": " Goblin",
  "👻": " Ghost",
  "👽": " Alien",
  "👾": " Alien Monster",
  "🤖": " Robot",
  "😺": " Grinning Cat",
  "😸": " Grinning Cat with Smiling Eyes",
  "😹": " Cat with Tears of Joy",
  "😻": " Smiling Cat with Heart-Eyes",
  "😼": " Cat with Wry Smile",
  "😽": " Kissing Cat",
  "🙀": " Weary Cat",
  "😿": " Crying Cat",
  "😾": " Pouting Cat",
  "💋": " Kiss Mark",
  "👋": " Waving Hand",
  "🤚": " Raised Back of Hand",
  "🖐️": " Hand with Fingers Splayed",
  "✋": " Raised Hand",
  "🖖": " Vulcan Salute",
  "👌": " OK Hand",
  "🤌": " Pinched Fingers",
  "🤏": " Pinching Hand",
  "✌": " Crossed Fingers",
  "🤟": " Love-You Gesture",
  "🤘": " Sign of the Horns",
  "🤙": " Call Me Hand",
  "👈": " Backhand Index Pointing Left",
  "👉": " Backhand Index Pointing Right",
  "👆": " Backhand Index Pointing Up",
  "🖕": " Middle Finger",
  "👇": " Backhand Index Pointing Down",
  "☝️": " Index Pointing Up",
  "👍": " Thumbs Up",
  "👎": " Thumbs Down",
  "✊": " Raised Fist",
  "👊": " Oncoming Fist",
  "🤛": " Left-Facing Fist",
  "🤜": " Right-Facing Fist",
  "👏": " Clapping Hands",
  "🙌": " Raising Hands",
  "👐": " Open Hands",
  "🤲": " Palms Up Together",
  "🤝": " Handshake",
  "🙏": " Folded Hands",
  "✍️": " Writing Hand",
  "💅": " Nail Polish",
  "🤳": " Selfie",
  "💪": " Flexed Biceps",
  "🦾": " Mechanical Arm",
  "🦿": " Mechanical Leg",
  "🦵": " Leg",
  "🦶": " Foot",
  "👂": " Ear",
  "🦻": " Ear with Hearing Aid",
  "👃": " Nose",
  "🧠": " Brain",
  "🫀": " Anatomical Heart",
  "🫁": " Lungs",
  "🦷": " Tooth",
  "🦴": " Bone",
  "👀": " Eyes",
  "👁️": " Eye",
  "👅": " Tongue",
  "👄": " Mouth",
  "👶": " Baby",
  "🧒": " Child",
  "👦": " Boy",
  "👧": " Girl",
  "🧑": " Person",
  "👱": " Person: Blond Hair",
  "👨": " Man",
  "🧔": " Person: Beard",
  "👨‍🦰": "Man: Red Hair",
  "👨‍🦱": " Man: Curly Hair",
  "👨‍🦳": " Man: White Hair",
  "👨‍🦲": " Man: Bald",
  "👩": " Woman",
  "👩‍🦰": " Woman: Red Hair",
  "🧑‍🦰": " Person: Red Hair",
  "👩‍🦱": " Woman: Curly Hair",
  "🧑‍🦱": " Person: Curly Hair",
  "👩‍🦳": " Woman: White Hair",
  "🧑‍🦳": " Person: White Hair",
  "👩‍🦲": " Woman: Bald",
  "🧑‍🦲": " Person: Bald",
  "👱‍♀️": " Woman: Blond Hair",
  "👱‍♂️": "Man: Blond Hair",
  "🧓": " Older Person",
  "👴": " Old Man",
  "🩳": "Shorts",
  "👙": " Bikini",
  "👚": "Woman’s Clothes",
  "👛": "Purse",
  "👜": "Handbag",
  "👝": " Clutch Bag",
  "🎒": " Backpack",
  "🩴": " Thong Sandal",
  "👞": "Man’s Shoe",
  "👟": "Running Shoe",
  "🥾": " Hiking Boot",
  "🥿": " Flat Shoe",
  "👠": "High-Heeled Shoe",
  "👡": "Woman’s Sandal",
  "🩰": "Ballet Shoes",
  "👢": "Woman’s Boot",
  "👑": "Crown",
  "👒": "Woman’s Hat",
  "🎩": "Top Hat",
  "🎓": "Graduation Cap",
  "🧢": "Billed Cap",
  "🪖": "Military Helmet",
  "⛑️": "Rescue Worker’s Helmet",
  "💄": "Lipstick",
  "💍": "Ring",
  "💼": "Briefcase",
  "🩸": "Drop of Blood",
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
