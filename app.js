/**
 * VIBEZ WEB PLAYER - ADVANCED CORE ENGINE
 * Full-fidelity interactive Web Player with 21 Master Hits
 * Complete real-time synchronized karaoke lyrics, playlist engine, search & elevated playback dock
 */

// ==========================================================================
// 1. DATA MODEL: 21 TRACKS WITH COMPREHENSIVE FULL-DURATION TIMED LYRICS
// ==========================================================================

const TRACKS_DATA = [
  {
    id: 1,
    title: "Runaway",
    artist: "AURORA",
    album: "All My Demons Greeting Me as a Friend",
    year: "2015",
    duration: "4:08",
    color: "#4a5d6e",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794334199/AURORA_-_Runaway.mp3",
    monthlyListeners: "18,421,908",
    bio: "AURORA is a Norwegian singer, songwriter and producer whose distinct ethereal pop is marked by emotional storytelling and atmospheric electronica.",
    lyrics: [
      { time: 0, text: "♪ (Ethereal instrumental intro) ♪" },
      { time: 9, text: "I was listenin' to the ocean" },
      { time: 15, text: "I saw a face in the sand" },
      { time: 20, text: "But when I picked it up" },
      { time: 25, text: "Then it vanished through my hands, da-da-dum" },
      { time: 32, text: "I had a dream I was seven" },
      { time: 38, text: "Climbing up in a tree" },
      { time: 43, text: "I saw a piece of heaven" },
      { time: 48, text: "Waiting patiently for me, da-da-dum" },
      { time: 54, text: "And I was runnin' far away" },
      { time: 60, text: "Would I run off the world someday?" },
      { time: 66, text: "Nobody knows, nobody knows" },
      { time: 72, text: "And I was dancing in the rain" },
      { time: 77, text: "I felt alive and I can't complain" },
      { time: 84, text: "Take me home, take me home where I belong" },
      { time: 95, text: "I can't take it anymore" },
      { time: 103, text: "Take me home, take me home where I belong" },
      { time: 114, text: "I got no other place to go" },
      { time: 122, text: "Take me home, take me home where I belong" },
      { time: 134, text: "♪ (Emotional vocal build-up) ♪" },
      { time: 144, text: "I was listenin' to the whisper" },
      { time: 151, text: "Said that I had a home" },
      { time: 157, text: "And with you I was never alone" },
      { time: 167, text: "And I was runnin' far away" },
      { time: 174, text: "Would I run off the world someday?" },
      { time: 182, text: "Nobody knows, nobody knows" },
      { time: 190, text: "And I was dancing in the rain" },
      { time: 197, text: "I felt alive and I can't complain" },
      { time: 205, text: "Take me home, take me home where I belong" },
      { time: 216, text: "I can't take it anymore" },
      { time: 226, text: "Take me home, take me home where I belong" },
      { time: 238, text: "♪ (Ethereal wind & vocal fade out) ♪" }
    ]
  },
  {
    id: 2,
    title: "Happy Nation",
    artist: "Ace of Base",
    album: "Happy Nation",
    year: "1992",
    duration: "4:15",
    color: "#733528",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794334197/Ace_of_Base_-_Happy_Nation.mp3",
    monthlyListeners: "11,894,302",
    bio: "Ace of Base is a Swedish pop group formed in 1987, one of the most successful pop groups in history with iconic Euro-reggae-pop grooves.",
    lyrics: [
      { time: 0, text: "♪ Laudate omnes gentes laudate ♪" },
      { time: 12, text: "♪ Magnificat in secula ♪" },
      { time: 21, text: "Happy nation, living in a happy nation" },
      { time: 30, text: "Where the people understand and face the truth" },
      { time: 39, text: "And they tell you hope for that which is unsaid" },
      { time: 48, text: "Ideas for which people strive and fight" },
      { time: 57, text: "A brother should not make his brother fight" },
      { time: 66, text: "Happy nation, living in a happy nation" },
      { time: 76, text: "Where the people understand and face the truth" },
      { time: 86, text: "Too many persons come and set the fire" },
      { time: 95, text: "We gotta keep the dream alive" },
      { time: 105, text: "Happy nation, living in a happy nation" },
      { time: 120, text: "♪ (Reggae-pop synth groove) ♪" },
      { time: 135, text: "A man will not die for a medal of honour" },
      { time: 144, text: "Not for pride or the fear of disgrace" },
      { time: 154, text: "And we stand united for what we believe" },
      { time: 164, text: "Happy nation, living in a happy nation" },
      { time: 174, text: "Where the people understand and face the truth" },
      { time: 185, text: "Ideas for which people strive and fight" },
      { time: 198, text: "Brother should not make his brother fight" },
      { time: 210, text: "Happy nation, living in a happy nation" },
      { time: 225, text: "Living in a happy nation..." },
      { time: 240, text: "♪ (Choral chant fade out) ♪" }
    ]
  },
  {
    id: 3,
    title: "Rasputin",
    artist: "Boney M.",
    album: "Nightflight to Venus",
    year: "1978",
    duration: "4:25",
    color: "#b84e14",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794334190/Boney_M._-_Rasputin.mp3",
    monthlyListeners: "14,780,215",
    bio: "Boney M. is a Euro-Caribbean vocal group created by German record producer Frank Farian in 1976 that ruled disco dance floors across the globe.",
    lyrics: [
      { time: 0, text: "♪ (Balalaika & energetic disco beat) ♪" },
      { time: 15, text: "There lived a certain man in Russia long ago" },
      { time: 20, text: "He was big and strong, in his eyes a flaming glow" },
      { time: 25, text: "Most people looked at him with terror and with fear" },
      { time: 30, text: "But to Moscow chicks he was such a lovely dear" },
      { time: 35, text: "He could preach the Bible like a preacher" },
      { time: 39, text: "Full of ecstasy and fire" },
      { time: 42, text: "But he also was the kind of teacher" },
      { time: 46, text: "Women would desire" },
      { time: 49, text: "Ra-ra-Rasputin, lover of the Russian queen" },
      { time: 55, text: "There was a cat that really was gone" },
      { time: 60, text: "Ra-ra-Rasputin, Russia's greatest love machine" },
      { time: 65, text: "It was a shame how he carried on" },
      { time: 72, text: "He ruled the Russian land and never mind the Czar" },
      { time: 77, text: "But the kasachok he danced really wunderbar" },
      { time: 82, text: "In all affairs of state he was the man to please" },
      { time: 87, text: "But he was real great when he had a girl to squeeze" },
      { time: 93, text: "For the queen he was no wheeler dealer" },
      { time: 97, text: "Though she'd heard the things he'd done" },
      { time: 100, text: "She believed he was a holy healer" },
      { time: 104, text: "Who would heal her son" },
      { time: 108, text: "Ra-ra-Rasputin, lover of the Russian queen" },
      { time: 114, text: "There was a cat that really was gone" },
      { time: 119, text: "Ra-ra-Rasputin, Russia's greatest love machine" },
      { time: 124, text: "It was a shame how he carried on" },
      { time: 135, text: "♪ (Spoken: But when his drinking and lusting...) ♪" },
      { time: 142, text: "Ra-ra-Rasputin!" },
      { time: 152, text: "♪ (High tempo Russian dance breakdown) ♪" },
      { time: 170, text: "\"This man's just got to go!\" declared his enemies" },
      { time: 175, text: "But the ladies begged, \"Don't you try to do it, please\"" },
      { time: 180, text: "No doubt this Rasputin had lots of hidden charms" },
      { time: 185, text: "Though he was a brute they just fell into his arms" },
      { time: 191, text: "Then one night some men of higher standing" },
      { time: 196, text: "Set a trap, they're not to blame" },
      { time: 200, text: "\"Come to visit us,\" they kept demanding" },
      { time: 204, text: "And he really came" },
      { time: 208, text: "Ra-ra-Rasputin, lover of the Russian queen" },
      { time: 214, text: "They put some poison into his wine" },
      { time: 219, text: "Ra-ra-Rasputin, Russia's greatest love machine" },
      { time: 224, text: "He drank it all and said, \"I feel fine!\"" },
      { time: 230, text: "Ra-ra-Rasputin, lover of the Russian queen" },
      { time: 236, text: "They didn't quit, they wanted his head" },
      { time: 241, text: "Ra-ra-Rasputin, Russia's greatest love machine" },
      { time: 246, text: "And so they shot him 'til he was dead!" },
      { time: 255, text: "♪ (Oh, those Russians! Outro) ♪" }
    ]
  },
  {
    id: 4,
    title: "LET THE WORLD BURN",
    artist: "Chris Grey",
    album: "LET THE WORLD BURN",
    year: "2023",
    duration: "2:48",
    color: "#6b1414",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794334185/Chris_Grey_-_LET_THE_WORLD_BURN.mp3",
    monthlyListeners: "3,250,119",
    bio: "Chris Grey is a Canadian pop/R&B producer, singer, and songwriter celebrated for cinematic dark-pop anthems with grand vocal hooks.",
    lyrics: [
      { time: 0, text: "♪ (Dark dramatic bass & tension intro) ♪" },
      { time: 8, text: "If I can't have you, then nobody will" },
      { time: 14, text: "I'd take a bullet and swallow the pill" },
      { time: 20, text: "Look what you made me do, look what you turned me to" },
      { time: 26, text: "I'm losing all my mind just over you" },
      { time: 32, text: "I'll burn this city down just to keep you warm" },
      { time: 38, text: "I'll tear the heavens out in the middle of the storm" },
      { time: 44, text: "If the world is ending, let the world burn!" },
      { time: 51, text: "Let it crash, let it turn, let it all burn!" },
      { time: 59, text: "They say that love is kind, but they lied to me" },
      { time: 66, text: "All I feel inside is this agony" },
      { time: 72, text: "I watched the ashes fall down upon my head" },
      { time: 78, text: "I'd rather see it all turned to crimson red" },
      { time: 84, text: "I'll burn this city down just to keep you warm" },
      { time: 90, text: "I'll tear the heavens out in the middle of the storm" },
      { time: 97, text: "If the world is ending, let the world burn!" },
      { time: 104, text: "Let it burn, yeah let the world burn!" },
      { time: 115, text: "♪ (Intense orchestral trap breakdown) ♪" },
      { time: 128, text: "Can you hear the sirens crying out tonight?" },
      { time: 135, text: "Nothing's gonna stop me from this fight" },
      { time: 142, text: "If the world is ending, let the world burn!" },
      { time: 150, text: "Let the world burn, yeah let it burn..." },
      { time: 160, text: "♪ (Heavy echoing piano fade out) ♪" }
    ]
  },
  {
    id: 5,
    title: "Sweater Weather",
    artist: "The Neighbourhood",
    album: "I Love You.",
    year: "2013",
    duration: "4:00",
    color: "#2f3842",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794334180/The_Neighbourhood_-_Sweater_Weather.mp3",
    monthlyListeners: "44,129,504",
    bio: "The Neighbourhood is an American rock band formed in Newbury Park, California, renowned worldwide for their sultry blend of rock and indie pop.",
    lyrics: [
      { time: 0, text: "♪ (Dreamy reverb guitar intro) ♪" },
      { time: 11, text: "And all I am is a man" },
      { time: 14, text: "I want the world in my hands" },
      { time: 17, text: "I hate the beach but I stand" },
      { time: 20, text: "In California with my toes in the sand" },
      { time: 24, text: "Use the sleeves on my sweater" },
      { time: 27, text: "Let's have an adventure" },
      { time: 30, text: "Head in the clouds but my gravity's centered" },
      { time: 34, text: "Touch my neck and I'll touch yours" },
      { time: 38, text: "You in those little high waisted shorts, oh" },
      { time: 43, text: "She knows what I think about" },
      { time: 47, text: "And what I think about" },
      { time: 50, text: "One love, two mouths" },
      { time: 54, text: "One love, one house" },
      { time: 57, text: "No shirt, no blouse" },
      { time: 60, text: "Just us, you find out" },
      { time: 64, text: "Nothing that I wouldn't wanna tell you about, no" },
      { time: 69, text: "'Cause it's too cold for you here" },
      { time: 74, text: "And now, so let me hold" },
      { time: 79, text: "Both your hands in the holes of my sweater" },
      { time: 86, text: "And if I may just take your breath away" },
      { time: 92, text: "I don't mind if there's not much to say" },
      { time: 97, text: "Sometimes the silence guides a mind" },
      { time: 102, text: "To move to a place so far away" },
      { time: 108, text: "The goosebumps start to raise" },
      { time: 112, text: "The minute that my left hand meets your waist" },
      { time: 117, text: "And then I watch your face" },
      { time: 121, text: "Put my finger on your tongue 'cause you love the taste, yeah" },
      { time: 127, text: "These hearts adore, everyone the other beats hardest for" },
      { time: 135, text: "Inside this place is warm" },
      { time: 140, text: "Outside it starts to pour" },
      { time: 145, text: "Coming down, one love, two mouths" },
      { time: 152, text: "One love, one house, no shirt, no blouse" },
      { time: 159, text: "'Cause it's too cold for you here" },
      { time: 165, text: "And now, so let me hold" },
      { time: 170, text: "Both your hands in the holes of my sweater" },
      { time: 182, text: "'Cause it's too cold for you here" },
      { time: 192, text: "Both your hands in the holes of my sweater" },
      { time: 205, text: "It's too cold, it's too cold" },
      { time: 218, text: "The holes of my sweater..." },
      { time: 230, text: "♪ (Atmospheric indie guitar fade out) ♪" }
    ]
  },
  {
    id: 6,
    title: "Moral of the Story",
    artist: "Ashe",
    album: "Moral of the Story: Chapter 1 & 2",
    year: "2019",
    duration: "3:21",
    color: "#85582f",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794334118/Ashe_-_Moral_of_the_Story.mp3",
    monthlyListeners: "12,940,211",
    bio: "Ashlyn Rae Willson, known as Ashe, is an American singer-songwriter known for her conversational, nostalgic lyricism and sweeping piano pop melodies.",
    lyrics: [
      { time: 0, text: "♪ (Gentle acoustic piano chords) ♪" },
      { time: 9, text: "So I never really knew you" },
      { time: 15, text: "God, I really tried to" },
      { time: 20, text: "Blindsided, addicted" },
      { time: 25, text: "Felt we could survive through anything" },
      { time: 31, text: "They say it's better to have loved and lost" },
      { time: 36, text: "Than never to have loved at all" },
      { time: 41, text: "That could be a load of shit" },
      { time: 45, text: "But I just need to tell you all" },
      { time: 51, text: "Some mistakes get made" },
      { time: 55, text: "That's alright, that's okay" },
      { time: 58, text: "You can think that you're in love" },
      { time: 61, text: "When you're really just in pain" },
      { time: 65, text: "Some mistakes get made" },
      { time: 68, text: "That's alright, that's okay" },
      { time: 72, text: "In the end, it's better for me" },
      { time: 76, text: "That's the moral of the story, babe" },
      { time: 84, text: "It's funny how a memory turns into a bad dream" },
      { time: 93, text: "When runnin' down the hallway was once a fun thing" },
      { time: 102, text: "Now it's just the place where we fought until we screamed" },
      { time: 111, text: "Some mistakes get made" },
      { time: 115, text: "That's alright, that's okay" },
      { time: 119, text: "You can think that you're in love" },
      { time: 123, text: "When you're really just in pain" },
      { time: 127, text: "In the end, it's better for me" },
      { time: 132, text: "That's the moral of the story, babe" },
      { time: 144, text: "They say you never know what you've got 'til it's gone" },
      { time: 154, text: "And I'm finally finding out that I'm stronger alone" },
      { time: 164, text: "Some mistakes get made" },
      { time: 168, text: "That's alright, that's okay" },
      { time: 173, text: "In the end, it's better for me" },
      { time: 179, text: "That's the moral of the story, babe" },
      { time: 190, text: "♪ (Resonant piano chord resolution) ♪" }
    ]
  },
  {
    id: 7,
    title: "back to friends",
    artist: "sombr",
    album: "in another life",
    year: "2023",
    duration: "2:58",
    color: "#284457",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794334080/sombr_-_back_to_friends.mp3",
    monthlyListeners: "8,290,140",
    bio: "sombr (Shane Boose) is a rising singer, songwriter, and multi-instrumentalist from New York known for raw emotional bedroom indie rock.",
    lyrics: [
      { time: 0, text: "♪ (Mellow guitar strumming intro) ♪" },
      { time: 8, text: "Can we go back to being friends?" },
      { time: 14, text: "Before we took off all our clothes" },
      { time: 20, text: "Before we talked about the end" },
      { time: 26, text: "Before we watched the curtains close" },
      { time: 32, text: "I know I crossed a line that night" },
      { time: 38, text: "Under the flickering street light" },
      { time: 44, text: "And now we can't look in each other's eyes" },
      { time: 50, text: "Without remembering all the goodbyes" },
      { time: 56, text: "Can we go back to friends?" },
      { time: 62, text: "Before we broke what didn't need to bend?" },
      { time: 69, text: "'Cause I miss talking to you in my car" },
      { time: 76, text: "Driving around, counting every star" },
      { time: 83, text: "Can we go back? Can we go back?" },
      { time: 92, text: "Now there is silence when you call my phone" },
      { time: 98, text: "Two people sitting in a crowded room alone" },
      { time: 105, text: "I hate that we became a memory" },
      { time: 112, text: "That hurts too much to ever set us free" },
      { time: 120, text: "Can we go back to friends?" },
      { time: 128, text: "Before we broke what didn't need to bend?" },
      { time: 136, text: "'Cause I miss talking to you in my car" },
      { time: 144, text: "Can we go back?" },
      { time: 155, text: "I really wish that we could just pretend..." },
      { time: 166, text: "Can we go back to friends?" },
      { time: 172, text: "♪ (Gentle acoustic fade out) ♪" }
    ]
  },
  {
    id: 8,
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    album: "Easy on My Eyes",
    year: "2021",
    duration: "2:57",
    color: "#5c331e",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794334046/Stephen_Sanchez_-_Until_I_Found_You.mp3",
    monthlyListeners: "26,110,845",
    bio: "Stephen Sanchez is an American singer-songwriter who channels classic 1950s and 60s doo-wop and rock-and-roll into modern romantic masterpieces.",
    lyrics: [
      { time: 0, text: "♪ (1950s doo-wop vintage guitar) ♪" },
      { time: 10, text: "Georgia, Wrap me up in all your..." },
      { time: 18, text: "I want you in my arms, oh, let me hold you" },
      { time: 26, text: "I'll never let you go again, like I did" },
      { time: 34, text: "Oh, I used to say" },
      { time: 38, text: "\"I would never fall in love until I found her\"" },
      { time: 47, text: "I said, \"I would never fall, unless it's you I fall into\"" },
      { time: 56, text: "I was lost within the darkness, but then I found her" },
      { time: 65, text: "I found you" },
      { time: 73, text: "Heaven, when I held you again" },
      { time: 81, text: "How could we ever just be friends?" },
      { time: 89, text: "I would rather die than let you go" },
      { time: 98, text: "Oh, I used to say" },
      { time: 102, text: "\"I would never fall in love until I found her\"" },
      { time: 111, text: "I said, \"I would never fall, unless it's you I fall into\"" },
      { time: 120, text: "I was lost within the darkness, but then I found her" },
      { time: 129, text: "I found you" },
      { time: 138, text: "♪ (Soulful guitar solo & backing choir) ♪" },
      { time: 150, text: "\"I would never fall in love until I found her\"" },
      { time: 158, text: "I was lost within the darkness, but then I found her" },
      { time: 168, text: "I found you..." }
    ]
  },
  {
    id: 9,
    title: "Summertime Sadness",
    artist: "Lana Del Rey",
    album: "Born to Die",
    year: "2012",
    duration: "4:25",
    color: "#6b2c3e",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333988/Lana_Del_Rey_-_Summertime_Sadness.mp3",
    monthlyListeners: "58,740,190",
    bio: "Lana Del Rey is an acclaimed American singer-songwriter known for her cinematic quality and exploration of tragic romance, glamour, and melancholia.",
    lyrics: [
      { time: 0, text: "Kiss me hard before you go" },
      { time: 6, text: "Summertime sadness" },
      { time: 10, text: "I just wanted you to know" },
      { time: 15, text: "That baby, you the best" },
      { time: 19, text: "I got my red dress on tonight" },
      { time: 24, text: "Dancin' in the dark, in the pale moonlight" },
      { time: 29, text: "Done my hair up real big, beauty queen style" },
      { time: 34, text: "High heels off, I'm feelin' alive" },
      { time: 39, text: "Oh, my God, I feel it in the air" },
      { time: 44, text: "Telephone wires above are sizzlin' like a snare" },
      { time: 49, text: "Honey, I'm on fire, I feel it everywhere" },
      { time: 54, text: "Nothin' scares me anymore" },
      { time: 58, text: "Kiss me hard before you go" },
      { time: 63, text: "Summertime sadness" },
      { time: 68, text: "I just wanted you to know" },
      { time: 73, text: "That baby, you the best" },
      { time: 77, text: "I got that summertime, summertime sadness" },
      { time: 82, text: "Su-su-summertime, summertime sadness" },
      { time: 87, text: "Got that summertime, summertime sadness" },
      { time: 92, text: "Oh, oh-oh-oh" },
      { time: 98, text: "I'm feelin' electric tonight" },
      { time: 103, text: "Cruisin' down the coast, got the radio on" },
      { time: 107, text: "Pull the top down, feel the wind in my hair" },
      { time: 112, text: "Think I'll miss you forever, like the stars miss the sun" },
      { time: 118, text: "Kiss me hard before you go" },
      { time: 123, text: "Summertime sadness" },
      { time: 128, text: "I just wanted you to know" },
      { time: 133, text: "That baby, you the best" },
      { time: 137, text: "I got that summertime, summertime sadness" },
      { time: 147, text: "Su-su-summertime, summertime sadness" },
      { time: 158, text: "Think I'll miss you forever, like the stars miss the sun in the mornin' sky" },
      { time: 170, text: "Later's better than never, even if you're gone, I'm gonna drive" },
      { time: 180, text: "Kiss me hard before you go" },
      { time: 190, text: "Summertime sadness" },
      { time: 200, text: "I got that summertime, summertime sadness" },
      { time: 215, text: "Su-su-summertime sadness..." },
      { time: 235, text: "Oh baby, you're the best..." },
      { time: 250, text: "♪ (Ethereal cinematic string fade out) ♪" }
    ]
  },
  {
    id: 10,
    title: "Line Without a Hook",
    artist: "Ricky Montgomery",
    album: "Montgomery Ricky",
    year: "2016",
    duration: "4:09",
    color: "#2a5347",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333940/Ricky_Montgomery_-_Line_Without_a_Hook.mp3",
    monthlyListeners: "9,820,311",
    bio: "Ricky Montgomery is an American singer-songwriter known for his vibrant indie pop melodies, candid vulnerability, and viral anthem hooks.",
    lyrics: [
      { time: 0, text: "♪ (Upbeat indie acoustic guitar strum) ♪" },
      { time: 8, text: "I don't really give a damn about the way you touch me" },
      { time: 13, text: "When we're alone" },
      { time: 16, text: "You can hold my hand if no one's home" },
      { time: 22, text: "Do you like it when I'm away?" },
      { time: 26, text: "If I went and hurt my body, baby, would you love me the same?" },
      { time: 34, text: "I can't help it, I'm a line without a hook" },
      { time: 41, text: "Baby, I'm a wreck when I'm without you" },
      { time: 46, text: "I need you here to stay" },
      { time: 50, text: "I broke all my bones that day I found you" },
      { time: 56, text: "Crying at the lake" },
      { time: 60, text: "Was it something I said to make you feel like you're alone?" },
      { time: 67, text: "Baby, I'm a wreck without you, oh" },
      { time: 75, text: "She's a, she's a lady, and I am just a boy" },
      { time: 83, text: "He's singing, \"She's only looking for a toy\"" },
      { time: 91, text: "Oh, there is nobody that could ever treat you right like I do" },
      { time: 101, text: "All my friends say I'm insane for chasing after you" },
      { time: 111, text: "But baby, I'm a wreck when I'm without you" },
      { time: 117, text: "I need you here to stay" },
      { time: 123, text: "I broke all my bones that day I found you" },
      { time: 130, text: "Crying at the lake" },
      { time: 138, text: "Was it something I said to make you feel like you're alone?" },
      { time: 146, text: "Baby, I'm a wreck without you" },
      { time: 160, text: "♪ (Energetic indie bass breakdown) ♪" },
      { time: 175, text: "She's a lady, and I'm just a boy!" },
      { time: 186, text: "Baby, I'm a wreck when I'm without you!" },
      { time: 196, text: "I need you here to stay" },
      { time: 208, text: "I broke all my bones that day I found you" },
      { time: 220, text: "Baby, I'm a wreck without you..." },
      { time: 235, text: "♪ (Acoustic ending chords) ♪" }
    ]
  },
  {
    id: 11,
    title: "Love Me Not",
    artist: "Ravyn Lenae & Ritz Reynolds",
    album: "Bird's Eye",
    year: "2024",
    duration: "3:33",
    color: "#6e3f6d",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333929/Ravyn_Lenae_Ritz_Reynolds_-_Love_Me_Not.mp3",
    monthlyListeners: "4,612,980",
    bio: "Ravyn Lenae is an American R&B and neo-soul singer-songwriter from Chicago, renowned for her mesmerizing whistle register and lush vintage productions.",
    lyrics: [
      { time: 0, text: "♪ (Lush neo-soul bassline & shimmering keys) ♪" },
      { time: 10, text: "Petals on the floor, count 'em one by one" },
      { time: 16, text: "Wondering if we've only just begun" },
      { time: 23, text: "He loves me, he loves me not" },
      { time: 30, text: "Spinning 'round my head like a carousel thought" },
      { time: 37, text: "You hold my hand when it's dark outside" },
      { time: 44, text: "But in the morning light you run and hide" },
      { time: 51, text: "Is it genuine, or just a sweet disguise?" },
      { time: 58, text: "I can see the hesitation in your eyes" },
      { time: 65, text: "Love me, love me not" },
      { time: 72, text: "Tell me what we got" },
      { time: 79, text: "Are we building castles or just watching them drop?" },
      { time: 86, text: "Love me, love me not" },
      { time: 95, text: "I gave you my soul on a silver plate" },
      { time: 102, text: "But you're always showing up fashionably late" },
      { time: 110, text: "Whispering sweet nothings that you can't keep" },
      { time: 117, text: "Leaving me awake while you fall asleep" },
      { time: 126, text: "Love me, love me not" },
      { time: 134, text: "Tell me what we got" },
      { time: 142, text: "♪ (Velvety vocal harmonies & guitar riff) ♪" },
      { time: 158, text: "He loves me... he loves me not..." },
      { time: 172, text: "I need to know where we stand today" },
      { time: 185, text: "Love me or please just walk away" },
      { time: 198, text: "Love me not..." },
      { time: 208, text: "♪ (Smooth R&B groove fade) ♪" }
    ]
  },
  {
    id: 12,
    title: "7 Years",
    artist: "Lukas Graham",
    album: "Lukas Graham",
    year: "2015",
    duration: "3:57",
    color: "#3d4b63",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333829/Lukas_Graham_-_7_Years.mp3",
    monthlyListeners: "24,800,912",
    bio: "Lukas Graham is a Danish pop and soul band fronted by Lukas Forchhammer, achieving international fame with this worldwide coming-of-age hit.",
    lyrics: [
      { time: 0, text: "♪ (Tick-tock piano opening) ♪" },
      { time: 11, text: "Once I was seven years old, my mama told me" },
      { time: 16, text: "\"Go make yourself some friends or you'll be lonely\"" },
      { time: 22, text: "Once I was seven years old" },
      { time: 28, text: "It was a big, big world, but we thought we were bigger" },
      { time: 34, text: "Pushing each other to the limits, we were learning quicker" },
      { time: 39, text: "By eleven smoking herb and drinking burning liquor" },
      { time: 45, text: "Never rich so we were out to make that steady figure" },
      { time: 51, text: "Once I was eleven years old, my daddy told me" },
      { time: 56, text: "\"Go get yourself a wife or you'll be lonely\"" },
      { time: 62, text: "Once I was eleven years old" },
      { time: 68, text: "I always had that dream, like my daddy before me" },
      { time: 73, text: "So I started writing songs, I started writing stories" },
      { time: 79, text: "Something about that glory just always seemed to bore me" },
      { time: 84, text: "'Cause only those I really love will ever really know me" },
      { time: 90, text: "Once I was twenty years old, my story got told" },
      { time: 96, text: "Before the morning sun, when life was lonely" },
      { time: 102, text: "Once I was twenty years old" },
      { time: 110, text: "I only see my goals, I don't believe in failure" },
      { time: 116, text: "'Cause I know the smallest voices, they can make it major" },
      { time: 121, text: "I got my boys with me, at least those in favor" },
      { time: 127, text: "And if we don't meet before I leave, I hope I'll see you later" },
      { time: 133, text: "Once I was twenty years old, my story got told" },
      { time: 144, text: "Soon we'll be thirty years old, our songs have been sold" },
      { time: 150, text: "We've traveled around the world and we're still roaming" },
      { time: 156, text: "Soon we'll be thirty years old" },
      { time: 165, text: "I'm still learning about life, my woman brought children for me" },
      { time: 172, text: "So I can sing them all my songs and I can tell them stories" },
      { time: 178, text: "Most of my boys are with me, some are still out seeking glory" },
      { time: 184, text: "And some I had to leave behind, my brother, I'm still sorry" },
      { time: 190, text: "Soon I'll be sixty years old, my daddy got sixty-one" },
      { time: 196, text: "Remember life, and then your life becomes a better one" },
      { time: 202, text: "I made a man so happy when I wrote a letter once" },
      { time: 208, text: "I hope my children come and visit once or twice a month" },
      { time: 215, text: "Soon I'll be sixty years old, will I think the world is cold?" },
      { time: 222, text: "Or will I have a lot of children who can warm me?" },
      { time: 228, text: "Once I was seven years old..." }
    ]
  },
  {
    id: 13,
    title: "Sailor Song",
    artist: "Gigi Perez",
    album: "Sailor Song",
    year: "2024",
    duration: "3:44",
    color: "#1d5452",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333743/Gigi_Perez_-_Sailor_Song.mp3",
    monthlyListeners: "32,940,110",
    bio: "Gigi Perez is an American singer-songwriter who soared onto global charts with this hauntingly intimate, viral acoustic folk-pop triumph.",
    lyrics: [
      { time: 0, text: "♪ (Intimate raw fingerpicked acoustic guitar) ♪" },
      { time: 10, text: "I saw her dancing in the tavern light" },
      { time: 18, text: "Golden hair reflecting back the quiet night" },
      { time: 26, text: "She kissed like salt and tasted like the ocean sea" },
      { time: 34, text: "Oh sailor girl, what did you do to me?" },
      { time: 42, text: "Won't you kiss me on the mouth and love me like a sailor?" },
      { time: 51, text: "And tell me that the sea will never fail her?" },
      { time: 60, text: "I'd cross every ocean, brave every tidal wave" },
      { time: 69, text: "Just to be the one you promised you would save" },
      { time: 79, text: "She told me tales of faraway sandy shores" },
      { time: 88, text: "And ships that never make it back to port" },
      { time: 97, text: "But when she holds me close against her chest" },
      { time: 106, text: "I finally found a harbor where my heart can rest" },
      { time: 115, text: "Won't you kiss me on the mouth and love me like a sailor?" },
      { time: 124, text: "And tell me that the sea will never fail her?" },
      { time: 134, text: "I'd cross every ocean, brave every tidal wave" },
      { time: 144, text: "Just to be the one you promised you would save" },
      { time: 155, text: "♪ (Passionate acoustic guitar crescendo) ♪" },
      { time: 170, text: "The wind is howling, calling out your name" },
      { time: 180, text: "And nothing on this shoreline feels the same" },
      { time: 190, text: "Oh sailor, take me out into the deep" },
      { time: 202, text: "A promise that our restless souls will keep..." },
      { time: 215, text: "♪ (Gentle waves & guitar resonance fade) ♪" }
    ]
  },
  {
    id: 14,
    title: "Girl That I Am",
    artist: "Ella Bright",
    album: "Girl That I Am",
    year: "2023",
    duration: "3:12",
    color: "#6e3a53",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333652/Ella_Bright_-_Girl_That_I_Am.mp3",
    monthlyListeners: "1,850,402",
    bio: "Ella Bright is an indie-pop singer-songwriter recognized for empowering vocal hooks, resonant acoustics, and poignant self-discovery narratives.",
    lyrics: [
      { time: 0, text: "♪ (Delicate folk-pop piano and acoustic warmth) ♪" },
      { time: 8, text: "Mirror on the wall, who is looking back?" },
      { time: 15, text: "Chasing down the dreams that I always lacked" },
      { time: 22, text: "Told to be quiet, told to fit the mold" },
      { time: 29, text: "But there's a fire burning that can't be controlled" },
      { time: 36, text: "I'm proud of the scars, proud of where I stand" },
      { time: 43, text: "Loving every piece of the girl that I am" },
      { time: 51, text: "I don't need permission to shine in the light" },
      { time: 58, text: "I've fought through the shadows, survived every night" },
      { time: 66, text: "Here's to the girl that I am!" },
      { time: 74, text: "They said I was too loud, they said I was too small" },
      { time: 82, text: "But watch me rise up taller than them all" },
      { time: 90, text: "Every stumble taught me how to take a leap" },
      { time: 98, text: "Promises to myself that I'm gonna keep" },
      { time: 106, text: "I'm proud of the scars, proud of where I stand" },
      { time: 114, text: "Loving every piece of the girl that I am" },
      { time: 123, text: "I don't need permission to shine in the light" },
      { time: 131, text: "Here's to the girl that I am!" },
      { time: 142, text: "♪ (Soaring melodic uplift & strings) ♪" },
      { time: 155, text: "Unapologetic, fearless and free" },
      { time: 164, text: "Finally comfortable being just me" },
      { time: 174, text: "Loving every piece of the girl that I am..." },
      { time: 185, text: "♪ (Sweet acoustic guitar fade out) ♪" }
    ]
  },
  {
    id: 15,
    title: "Daylight",
    artist: "David Kushner",
    album: "Daylight",
    year: "2023",
    duration: "3:32",
    color: "#474534",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333651/David_Kushner_-_Daylight.mp3",
    monthlyListeners: "36,419,021",
    bio: "David Kushner is an American singer-songwriter who captivated millions with his thunderous baritone, gothic piano chords, and dramatic themes.",
    lyrics: [
      { time: 0, text: "♪ (Haunting, reverberant grand piano intro) ♪" },
      { time: 11, text: "Telling myself I won't go there" },
      { time: 17, text: "Oh, but I know that I won't care" },
      { time: 23, text: "Tryna wash away all the blood I've spilt" },
      { time: 29, text: "This lust is a burden that we both built" },
      { time: 36, text: "How can I look in the mirror?" },
      { time: 42, text: "When the devil inside is getting clearer" },
      { time: 48, text: "Oh, I love it and I hate it at the same time" },
      { time: 54, text: "You and I drink the poison from the same vine" },
      { time: 60, text: "Oh, I love it and I hate it at the same time" },
      { time: 66, text: "Hiding all of our sins from the daylight" },
      { time: 73, text: "From the daylight, runnin' from the daylight" },
      { time: 81, text: "Hiding all of our sins from the daylight" },
      { time: 90, text: "Daylight..." },
      { time: 97, text: "Under the covers, the truth is denied" },
      { time: 103, text: "We feed on the secrets we bury inside" },
      { time: 109, text: "Praying for mercy that never will come" },
      { time: 116, text: "Numb to the feeling of what we've become" },
      { time: 123, text: "Oh, I love it and I hate it at the same time" },
      { time: 130, text: "You and I drink the poison from the same vine" },
      { time: 136, text: "Oh, I love it and I hate it at the same time" },
      { time: 142, text: "Hiding all of our sins from the daylight" },
      { time: 150, text: "From the daylight, runnin' from the daylight" },
      { time: 160, text: "Hiding all of our sins from the daylight" },
      { time: 172, text: "♪ (Dark, thundering church organ & deep choral pads) ♪" },
      { time: 185, text: "Can we ever find redemption in the sun?" },
      { time: 194, text: "Or are we forever doomed to what we've done?" },
      { time: 202, text: "Hiding all of our sins from the daylight..." }
    ]
  },
  {
    id: 16,
    title: "Babydoll",
    artist: "Dominic Fike",
    album: "Sunburn",
    year: "2023",
    duration: "1:38",
    color: "#5e3e2b",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333648/Dominic_Fike_-_Babydoll.mp3",
    monthlyListeners: "22,410,950",
    bio: "Dominic Fike is an American singer, rapper, and actor celebrated for genre-bending rock-rap-pop swagger and infectious sunny hooks.",
    lyrics: [
      { time: 0, text: "♪ (Punchy distorted indie bass & lo-fi drums) ♪" },
      { time: 7, text: "Please don't call me babydoll" },
      { time: 13, text: "I'm not the one you want at all" },
      { time: 19, text: "You saw me standing in the hall" },
      { time: 24, text: "Waiting on the summer to fall" },
      { time: 30, text: "I got vices, I got things I never say" },
      { time: 36, text: "Running out of patience every single day" },
      { time: 42, text: "You keep talking like we got forever" },
      { time: 48, text: "But you know we're never getting back together" },
      { time: 54, text: "Please don't call me babydoll" },
      { time: 60, text: "I'm not the one you want at all" },
      { time: 66, text: "Count the money, count the days" },
      { time: 72, text: "Lost inside this purple haze" },
      { time: 78, text: "Babydoll, don't call me babydoll" },
      { time: 85, text: "Yeah, you know it's over now" },
      { time: 92, text: "♪ (Fast scratch & abrupt drum stop) ♪" }
    ]
  },
  {
    id: 17,
    title: "Training Season",
    artist: "Dua Lipa",
    album: "Radical Optimism",
    year: "2024",
    duration: "3:29",
    color: "#7e1d3d",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333648/Dua_Lipa_-_Training_Season.mp3",
    monthlyListeners: "78,219,840",
    bio: "Dua Lipa is a global pop megastar and Grammy winner behind countless dance-pop anthems defining modern high-energy club pop culture.",
    lyrics: [
      { time: 0, text: "♪ (Pulsing synth-bass & hypnotic disco-pop groove) ♪" },
      { time: 9, text: "Are you someone that I can unpack with?" },
      { time: 14, text: "Or are you gonna leave me in a ditch?" },
      { time: 19, text: "I need someone who's gonna hold me close" },
      { time: 24, text: "Not someone who acts like a ghost" },
      { time: 28, text: "I need someone to hold me close, deeper than I've ever known" },
      { time: 34, text: "Whose love feels like a rodeo, knows just how to take control" },
      { time: 39, text: "He's down for real, not just for the thrill" },
      { time: 44, text: "Training season's over!" },
      { time: 48, text: "Training season's over!" },
      { time: 53, text: "Cause if that ain't you, then I'll just be on my own" },
      { time: 59, text: "I don't wanna have to teach you how to love me right" },
      { time: 65, text: "I don't wanna have to be the one to guide you through the night" },
      { time: 71, text: "Are you gonna be my lover? Or are you gonna waste my time?" },
      { time: 77, text: "Training season's over!" },
      { time: 85, text: "I've spent too many nights giving too much away" },
      { time: 90, text: "To boys who never had a single thing to say" },
      { time: 96, text: "Now I got standards raised up to the sky" },
      { time: 101, text: "Either meet me at the top or say goodbye" },
      { time: 106, text: "I need someone to hold me close, deeper than I've ever known" },
      { time: 112, text: "Whose love feels like a rodeo, knows just how to take control" },
      { time: 117, text: "Training season's over!" },
      { time: 122, text: "Training season's over!" },
      { time: 130, text: "I don't wanna have to teach you how to love me right" },
      { time: 138, text: "Training season's over!" },
      { time: 150, text: "♪ (Euphoric disco synth breakdown) ♪" },
      { time: 165, text: "Can you show me what you got?" },
      { time: 175, text: "Give me everything or not!" },
      { time: 185, text: "Training season's over!" },
      { time: 195, text: "Training season's over, yeah!" },
      { time: 204, text: "♪ (Slick disco bassline fade) ♪" }
    ]
  },
  {
    id: 18,
    title: "End of Beginning",
    artist: "Djo",
    album: "DECIDE",
    year: "2022",
    duration: "2:39",
    color: "#27486e",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333646/Djo_-_End_of_Beginning.mp3",
    monthlyListeners: "39,120,405",
    bio: "Djo is the musical moniker of actor and musician Joe Keery, famed for shimmering synth-wave textures and nostalgic indie pop hits.",
    lyrics: [
      { time: 0, text: "♪ (Nostalgic 80s synth chords & steady kick) ♪" },
      { time: 9, text: "Just one more tear to cry, one teardrop from my eye" },
      { time: 16, text: "You better save it for the middle of the night" },
      { time: 23, text: "When everything moves on, and all the friends are gone" },
      { time: 30, text: "You're standing in the cold, but you're still holding on" },
      { time: 37, text: "And when I'm back in Chicago, I feel it" },
      { time: 44, text: "Another version of me, I was in it" },
      { time: 51, text: "I wave goodbye to the end of beginning" },
      { time: 58, text: "Goodbye, goodbye, goodbye, goodbye" },
      { time: 66, text: "You take the man out of the city, not the city out the man" },
      { time: 73, text: "You try to figure out what you don't understand" },
      { time: 80, text: "The memories replay like pictures on the wall" },
      { time: 87, text: "Wondering if you ever had it after all" },
      { time: 94, text: "And when I'm back in Chicago, I feel it" },
      { time: 101, text: "Another version of me, I was in it" },
      { time: 108, text: "I wave goodbye to the end of beginning" },
      { time: 116, text: "Goodbye, goodbye, goodbye, goodbye" },
      { time: 125, text: "♪ (Soaring synth riff & guitar crescendo) ♪" },
      { time: 138, text: "Back in Chicago, I feel it..." },
      { time: 148, text: "Goodbye to the end of beginning..." },
      { time: 156, text: "♪ (Resonant synth hum fade) ♪" }
    ]
  },
  {
    id: 19,
    title: "I Think They Call This Love",
    artist: "Elliot James Reay",
    album: "I Think They Call This Love",
    year: "2024",
    duration: "2:58",
    color: "#544327",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333598/Elliot_James_Reay_-_I_Think_They_Call_This_Love.mp3",
    monthlyListeners: "6,920,119",
    bio: "Elliot James Reay is an English singer-songwriter who went viral bringing authentic 1950s rockabilly and vintage Elvis-style swagger back to modern charts.",
    lyrics: [
      { time: 0, text: "♪ (Vintage 1950s rock-and-roll guitar & swing rhythm) ♪" },
      { time: 9, text: "My hands are shaking and my knees are weak" },
      { time: 15, text: "Whenever you are near I can barely speak" },
      { time: 22, text: "What is this feeling that I'm going through?" },
      { time: 29, text: "Oh darling, tell me what you're trying to do" },
      { time: 36, text: "I think they call this love!" },
      { time: 42, text: "Falling from the stars above" },
      { time: 49, text: "Never felt my heart beat this fast before" },
      { time: 56, text: "Knocking down the lock on my guarded door" },
      { time: 63, text: "I think they call this love!" },
      { time: 71, text: "You smile at me and all the clouds turn blue" },
      { time: 78, text: "I never knew a dream could come this true" },
      { time: 85, text: "My friends all say that I've been acting strange" },
      { time: 92, text: "But I don't ever want this spell to change" },
      { time: 99, text: "I think they call this love!" },
      { time: 106, text: "Falling from the stars above" },
      { time: 113, text: "Never felt my heart beat this fast before" },
      { time: 120, text: "Knocking down the lock on my guarded door" },
      { time: 127, text: "I think they call this love!" },
      { time: 135, text: "♪ (Classic vintage guitar solo & doo-wop swing) ♪" },
      { time: 148, text: "Oh, I think they call this love!" },
      { time: 156, text: "Yes, I think they call this love..." },
      { time: 168, text: "Baby, it's gotta be love!" },
      { time: 175, text: "♪ (Vintage chord strum finish) ♪" }
    ]
  },
  {
    id: 20,
    title: "I Thought I Saw Your Face Today",
    artist: "She & Him",
    album: "Volume One",
    year: "2008",
    duration: "2:50",
    color: "#a85d38",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333851/She_Him_-_I_Thought_I_Saw_Your_Face_Today.mp3",
    monthlyListeners: "2,845,910",
    bio: "She & Him is an American indie folk and indie pop duo consisting of Zooey Deschanel and M. Ward, famous for their warm vintage harmony-rich acoustic compositions.",
    lyrics: [
      { time: 0, text: "♪ (Gentle acoustic picking & warm indie-folk strums) ♪" },
      { time: 8, text: "I thought I saw your face today" },
      { time: 14, text: "In the crowd along the way" },
      { time: 20, text: "But it was just somebody else" },
      { time: 26, text: "Reminding me of how I felt" },
      { time: 32, text: "When you were standing by my side" },
      { time: 38, text: "With nothing left for us to hide" },
      { time: 44, text: "The seasons turn from green to gold" },
      { time: 50, text: "And memories are growing old" },
      { time: 56, text: "I thought I saw your face today" },
      { time: 63, text: "Smiling in that gentle way" },
      { time: 70, text: "A silhouette against the sun" },
      { time: 77, text: "Reminding me of what is done" },
      { time: 85, text: "We sang our songs into the breeze" },
      { time: 91, text: "Beneath the shade of apple trees" },
      { time: 98, text: "But time has carried you afar" },
      { time: 105, text: "Like light from an extinguished star" },
      { time: 113, text: "♪ (Charming vintage guitar & vocal harmony interlude) ♪" },
      { time: 126, text: "I thought I saw your face today" },
      { time: 133, text: "And wished that you had chose to stay" },
      { time: 140, text: "But I'll just keep on walking on" },
      { time: 147, text: "Remembering where you have gone" },
      { time: 155, text: "I thought I saw your face today..." },
      { time: 165, text: "♪ (Soft folk acoustic guitar fade out) ♪" }
    ]
  },
  {
    id: 21,
    title: "Die With A Smile (Acoustic)",
    artist: "Lady Gaga & Bruno Mars",
    album: "Die With A Smile (Acoustic Sessions)",
    year: "2024",
    duration: "4:11",
    color: "#1e4c7a",
    src: "https://res.cloudinary.com/rfjcupje/video/upload/v1794333911/Lady_Gaga_Bruno_Mars_-_Die_With_A_Smile_-_Acoustic.mp3",
    monthlyListeners: "105,420,890",
    bio: "Global pop titans Lady Gaga and Bruno Mars join forces in this emotional, soulful power ballad delivered in an intimate, raw acoustic arrangement.",
    lyrics: [
      { time: 0, text: "♪ (Soulful acoustic guitar strum & warm Rhodes keyboard) ♪" },
      { time: 9, text: "(Bruno) I, I just woke up from a dream" },
      { time: 15, text: "Where you and I had to say goodbye" },
      { time: 21, text: "And I don't know what it all means" },
      { time: 27, text: "But since I survived, I realized" },
      { time: 33, text: "Wherever you go, that's where I'll follow" },
      { time: 40, text: "Nobody's promised tomorrow" },
      { time: 46, text: "So I'mma love you every night like it's the last night" },
      { time: 52, text: "Like it's the last night" },
      { time: 58, text: "If the world was ending, I'd wanna be next to you" },
      { time: 68, text: "If the party was over and our time on Earth was through" },
      { time: 78, text: "I'd wanna hold you just for a while" },
      { time: 84, text: "And die with a smile" },
      { time: 90, text: "If the world was ending, I'd wanna be next to you" },
      { time: 101, text: "(Lady Gaga) Ooh, lost, lost in the words that we scream" },
      { time: 108, text: "I don't even wanna do this anymore" },
      { time: 114, text: "'Cause you already know what you mean to me" },
      { time: 120, text: "And our love's the only thing worth fighting for" },
      { time: 127, text: "Wherever you go, that's where I'll follow" },
      { time: 134, text: "Nobody's promised tomorrow" },
      { time: 140, text: "So I'mma love you every night like it's the last night" },
      { time: 146, text: "Like it's the last night" },
      { time: 152, text: "(Both) If the world was ending, I'd wanna be next to you" },
      { time: 162, text: "If the party was over and our time on Earth was through" },
      { time: 172, text: "I'd wanna hold you just for a while" },
      { time: 178, text: "And die with a smile" },
      { time: 184, text: "If the world was ending, I'd wanna be next to you" },
      { time: 195, text: "(Both) Right next to you... right next to you" },
      { time: 207, text: "Ooh-ooh, if the world was ending, I'd wanna be next to you" },
      { time: 218, text: "I'd wanna hold you just for a while" },
      { time: 226, text: "And die with a smile" },
      { time: 234, text: "If the world was ending, I'd wanna be next to you..." },
      { time: 245, text: "♪ (Soulful acoustic chord resonance fade out) ♪" }
    ]
  }
];

// Curated Playlists Model
const DEFAULT_PLAYLISTS = [
  {
    id: "todays-top-hits",
    title: "Today's Top Hits",
    desc: "Lady Gaga & Bruno Mars, Dua Lipa, David Kushner, Djo and more global chart toppers.",
    color: "#1e4c7a",
    tracks: [21, 17, 15, 18, 5, 8, 13]
  },
  {
    id: "chill-acoustic",
    title: "Chill & Acoustic",
    desc: "Acoustic gems from She & Him, Lady Gaga & Bruno Mars, Gigi Perez, and Stephen Sanchez.",
    color: "#a85d38",
    tracks: [20, 21, 13, 8, 15, 19, 14]
  },
  {
    id: "indie-vibes",
    title: "Indie & Alternative",
    desc: "Alternative masterpieces by She & Him, The Neighbourhood, Dominic Fike, Djo and Ashe.",
    color: "#8d67ab",
    tracks: [5, 18, 16, 6, 13, 7, 20]
  },
  {
    id: "retro-rewind",
    title: "Retro Rewind",
    desc: "Classics and vintage sounds from Boney M., Ace of Base, Stephen Sanchez, Elliot James Reay & She & Him.",
    color: "#ba5d07",
    tracks: [3, 2, 8, 19, 12, 20]
  },
  {
    id: "master-collection",
    title: "All 21 Master Hits",
    desc: "Complete loaded collection of all 21 tracks in full high fidelity audio.",
    color: "#1ed760",
    tracks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  }
];

// Podcasts for Home "Podcasts" tab
const PODCASTS_DATA = [
  {
    title: "Song Exploder • Die With A Smile",
    creator: "Hrishikesh Hirway",
    desc: "Lady Gaga and Bruno Mars break down the intimate acoustic sessions and vocal chemistry.",
    trackId: 21,
    coverColor: "#1e4c7a"
  },
  {
    title: "Song Exploder • Sweater Weather",
    creator: "Hrishikesh Hirway",
    desc: "The Neighbourhood breaks down the writing and production behind 'Sweater Weather'.",
    trackId: 5,
    coverColor: "#222"
  },
  {
    title: "Dua Lipa: At Your Service",
    creator: "Dua Lipa",
    desc: "Dua in conversation with cultural icons discussing Radical Optimism and musical roots.",
    trackId: 17,
    coverColor: "#b31d3d"
  },
  {
    title: "Popcast • The Rise of Gigi Perez",
    creator: "The New York Times",
    desc: "Deep dive into viral acoustic hits and how Sailor Song dominated global playlists.",
    trackId: 13,
    coverColor: "#1d5452"
  },
  {
    title: "Behind the Vinyl • Boney M.",
    creator: "Classic Disco Stories",
    desc: "The legendary, unbelievable tale behind Frank Farian and Rasputin's disco reign.",
    trackId: 3,
    coverColor: "#b84e14"
  }
];

// Genres for Search Browse view
const BROWSE_GENRES = [
  { name: "Pop", color: "#8d67ab", track: 21 },
  { name: "Indie & Alt", color: "#e13300", track: 5 },
  { name: "Rock", color: "#e91429", track: 4 },
  { name: "R&B / Soul", color: "#2d46b9", track: 11 },
  { name: "Retro Classics", color: "#ba5d07", track: 3 },
  { name: "Chill & Focus", color: "#148a08", track: 1 },
  { name: "Mood", color: "#e8115b", track: 9 },
  { name: "Romance", color: "#dc148c", track: 8 },
  { name: "Acoustic", color: "#a85d38", track: 20 },
  { name: "Folk", color: "#477d95", track: 15 },
  { name: "Dance / Electronic", color: "#d84000", track: 2 },
  { name: "Late Night", color: "#1e3264", track: 18 }
];

// ==========================================================================
// 2. SVG ALBUM ART GENERATOR & COVER SYSTEM
// ==========================================================================

function generateCoverSVG(song) {
  const c1 = song.color || "#333333";
  const initials = song.artist.substring(0, 2).toUpperCase();
  const titleShort = song.title.length > 18 ? song.title.substring(0, 18) + '...' : song.title;
  const artistShort = song.artist.length > 20 ? song.artist.substring(0, 20) + '...' : song.artist;
  
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
    <defs>
      <linearGradient id="grad-${song.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c1}" />
        <stop offset="60%" stop-color="#121212" />
        <stop offset="100%" stop-color="#050505" />
      </linearGradient>
      <radialGradient id="vinyl-${song.id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#2a2a2a"/>
        <stop offset="35%" stop-color="#111111"/>
        <stop offset="70%" stop-color="#1a1a1a"/>
        <stop offset="100%" stop-color="#0a0a0a"/>
      </radialGradient>
    </defs>
    <rect width="400" height="400" fill="url(#grad-${song.id})"/>
    <circle cx="200" cy="165" r="130" fill="url(#vinyl-${song.id})" stroke="${c1}" stroke-width="2" opacity="0.85"/>
    <circle cx="200" cy="165" r="100" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
    <circle cx="200" cy="165" r="70" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <circle cx="200" cy="165" r="40" fill="${c1}" opacity="0.95"/>
    <circle cx="200" cy="165" r="10" fill="#121212"/>
    <text x="200" y="172" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="20" fill="#ffffff" text-anchor="middle" letter-spacing="1">${initials}</text>
    <rect x="0" y="300" width="400" height="100" fill="rgba(0,0,0,0.55)"/>
    <text x="24" y="342" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="22" fill="#ffffff">${escapeSvg(titleShort)}</text>
    <text x="24" y="372" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="15" fill="#1ed760">${escapeSvg(artistShort)}</text>
  </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function escapeSvg(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeHtml(str) {
  if (!str) return "";
  return str.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Generate cover data URLs for all tracks
TRACKS_DATA.forEach(t => {
  t.cover = generateCoverSVG(t);
});

// Try to fetch higher-res covers from iTunes Search API in background
async function fetchHighResArtwork() {
  for (const song of TRACKS_DATA) {
    try {
      const q = encodeURIComponent(`${song.artist} ${song.title}`);
      const res = await fetch(`https://itunes.apple.com/search?term=${q}&media=music&entity=song&limit=1`);
      if (res.ok) {
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          const highRes = data.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
          song.cover = highRes;
          updateLiveArtElements(song.id, highRes);
        }
      }
    } catch (e) {}
  }
}

function updateLiveArtElements(songId, artUrl) {
  document.querySelectorAll(`[data-track-cover-id="${songId}"]`).forEach(img => {
    img.src = artUrl;
  });
  if (state.currentTrack && state.currentTrack.id === songId) {
    elements.nowPlayingArt.src = artUrl;
    elements.panelAlbumArt.src = artUrl;
  }
}

// ==========================================================================
// 3. APPLICATION STATE
// ==========================================================================

const state = {
  currentTrack: null,
  currentPlaylist: TRACKS_DATA,
  currentPlaylistId: "master-collection",
  currentIndex: 0,
  userPlaylists: [],
  upcomingQueue: [],
  isPlaying: false,
  isShuffle: false,
  repeatMode: 0, // 0 = off/all, 1 = repeat song, 2 = no repeat
  volume: 0.8,
  previousVolume: 0.8,
  likedSongIds: new Set([1, 5, 8, 18, 20, 21]),
  activeView: "home",
  previousView: "home",
  viewHistory: ["home"],
  historyPointer: 0,
  rightSidebarOpen: false,
  rightSidebarSubpanel: "now-playing",
  activeLyricIndex: -1,
  homeFilter: "all", // "all", "music", "podcasts"
  libraryFilter: "playlists", // "playlists", "artists", "albums"
  librarySort: "recents",
  contextMenuTrack: null,
  isArtistFollowed: false
};

// ==========================================================================
// 4. DOM ELEMENTS CACHE
// ==========================================================================

const elements = {
  audio: document.getElementById("audioPlayer"),
  
  // Views
  homeView: document.getElementById("homeView"),
  searchView: document.getElementById("searchView"),
  likedView: document.getElementById("likedView"),
  playlistView: document.getElementById("playlistView"),
  lyricsView: document.getElementById("lyricsView"),
  contentScroll: document.getElementById("contentScroll"),
  ambientHeaderBg: document.getElementById("ambientHeaderBg"),
  topbar: document.getElementById("topbar"),
  greetingText: document.getElementById("greetingText"),

  // Navigation
  brandLogo: document.getElementById("brandLogo"),
  navHomeBtn: document.getElementById("navHomeBtn"),
  navSearchBtn: document.getElementById("navSearchBtn"),
  topbarHomeBtn: document.getElementById("topbarHomeBtn"),
  libLikedSongs: document.getElementById("libLikedSongs"),
  libLikedCount: document.getElementById("libLikedCount"),
  customPlaylistsList: document.getElementById("customPlaylistsList"),
  historyBackBtn: document.getElementById("historyBackBtn"),
  historyForwardBtn: document.getElementById("historyForwardBtn"),

  // Search
  topbarSearchWrapper: document.getElementById("topbarSearchWrapper"),
  globalSearchInput: document.getElementById("globalSearchInput"),
  searchClearBtn: document.getElementById("searchClearBtn"),
  searchResultsSection: document.getElementById("searchResultsSection"),
  browseCategoriesSection: document.getElementById("browseCategoriesSection"),
  topResultCard: document.getElementById("topResultCard"),
  searchMiniRows: document.getElementById("searchMiniRows"),
  searchArtistsRow: document.getElementById("searchArtistsRow"),
  browseGrid: document.getElementById("browseGrid"),

  // Home Containers
  homeMusicSubcontainer: document.getElementById("homeMusicSubcontainer"),
  homePodcastsSubcontainer: document.getElementById("homePodcastsSubcontainer"),
  podcastsCardsRow: document.getElementById("podcastsCardsRow"),
  quickGrid: document.getElementById("quickGrid"),
  madeForYouRow: document.getElementById("madeForYouRow"),
  todaysHitsRow: document.getElementById("todaysHitsRow"),
  artistsRow: document.getElementById("artistsRow"),
  homeTrackRows: document.getElementById("homeTrackRows"),
  playAllHomeBtn: document.getElementById("playAllHomeBtn"),

  // Liked Songs Elements
  likedTrackRows: document.getElementById("likedTrackRows"),
  likedHeroCount: document.getElementById("likedHeroCount"),
  likedHeroDuration: document.getElementById("likedHeroDuration"),
  playLikedBtn: document.getElementById("playLikedBtn"),
  shuffleLikedBtn: document.getElementById("shuffleLikedBtn"),
  downloadLikedBtn: document.getElementById("downloadLikedBtn"),

  // Playlist View Elements
  playlistHero: document.getElementById("playlistHero"),
  playlistHeroCover: document.getElementById("playlistHeroCover"),
  playlistHeroTitle: document.getElementById("playlistHeroTitle"),
  playlistHeroDesc: document.getElementById("playlistHeroDesc"),
  playlistHeroCount: document.getElementById("playlistHeroCount"),
  playlistHeroDuration: document.getElementById("playlistHeroDuration"),
  playlistTrackRows: document.getElementById("playlistTrackRows"),
  playPlaylistHeroBtn: document.getElementById("playPlaylistHeroBtn"),
  shufflePlaylistHeroBtn: document.getElementById("shufflePlaylistHeroBtn"),
  likePlaylistBtn: document.getElementById("likePlaylistBtn"),

  // Right Sidebar
  rightSidebar: document.getElementById("rightSidebar"),
  closeRightSidebarBtn: document.getElementById("closeRightSidebarBtn"),
  rightPanelTitle: document.getElementById("rightPanelTitle"),
  nowPlayingViewSubpanel: document.getElementById("nowPlayingViewSubpanel"),
  queueViewSubpanel: document.getElementById("queueViewSubpanel"),
  panelAlbumArt: document.getElementById("panelAlbumArt"),
  panelTrackTitle: document.getElementById("panelTrackTitle"),
  panelArtistName: document.getElementById("panelArtistName"),
  panelLikeBtn: document.getElementById("panelLikeBtn"),
  artistBioCover: document.getElementById("artistBioCover"),
  artistBioName: document.getElementById("artistBioName"),
  artistBioListeners: document.getElementById("artistBioListeners"),
  artistBioText: document.getElementById("artistBioText"),
  artistFollowBtn: document.getElementById("artistFollowBtn"),
  nextQueueItem: document.getElementById("nextQueueItem"),
  openQueueLink: document.getElementById("openQueueLink"),
  queueNowPlayingItem: document.getElementById("queueNowPlayingItem"),
  queueUpcomingList: document.getElementById("queueUpcomingList"),
  clearQueueBtn: document.getElementById("clearQueueBtn"),

  // Bottom Elevated Player Bar Controls
  nowPlayingArt: document.getElementById("nowPlayingArt"),
  nowPlayingTitle: document.getElementById("nowPlayingTitle"),
  nowPlayingArtist: document.getElementById("nowPlayingArtist"),
  playerLikeBtn: document.getElementById("playerLikeBtn"),
  playPauseBtn: document.getElementById("playPauseBtn"),
  playPauseIcon: document.getElementById("playPauseIcon"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  repeatBtn: document.getElementById("repeatBtn"),
  currentTime: document.getElementById("currentTime"),
  totalDuration: document.getElementById("totalDuration"),
  progressBarContainer: document.getElementById("progressBarContainer"),
  progressBarFill: document.getElementById("progressBarFill"),
  progressThumb: document.getElementById("progressThumb"),

  // Right Player Controls
  nowPlayingViewBtn: document.getElementById("nowPlayingViewBtn"),
  lyricsBtn: document.getElementById("lyricsBtn"),
  queueBtn: document.getElementById("queueBtn"),
  deviceBtn: document.getElementById("deviceBtn"),
  volumeBtn: document.getElementById("volumeBtn"),
  volumeIcon: document.getElementById("volumeIcon"),
  volumeSliderContainer: document.getElementById("volumeSliderContainer"),
  volumeSliderFill: document.getElementById("volumeSliderFill"),
  volumeThumb: document.getElementById("volumeThumb"),
  fullscreenBtn: document.getElementById("fullscreenBtn"),

  // Lyrics View
  lyricsSongTitle: document.getElementById("lyricsSongTitle"),
  lyricsArtistName: document.getElementById("lyricsArtistName"),
  closeLyricsBtn: document.getElementById("closeLyricsBtn"),
  lyricsScrollWrapper: document.getElementById("lyricsScrollWrapper"),
  lyricsContainer: document.getElementById("lyricsContainer"),

  // Modals & Popups
  trackContextMenu: document.getElementById("trackContextMenu"),
  createPlaylistModal: document.getElementById("createPlaylistModal"),
  createPlaylistBtn: document.getElementById("createPlaylistBtn"),
  newPlaylistTitleInput: document.getElementById("newPlaylistName") || document.getElementById("newPlaylistTitleInput"),
  newPlaylistDescInput: document.getElementById("newPlaylistDesc") || document.getElementById("newPlaylistDescInput"),
  cancelPlaylistModalBtn: document.getElementById("cancelCreatePlaylist") || document.getElementById("cancelPlaylistModalBtn"),
  savePlaylistModalBtn: document.getElementById("saveCreatePlaylist") || document.getElementById("savePlaylistModalBtn"),
  closeCreatePlaylistModal: document.getElementById("closeCreatePlaylistModal"),

  premiumModal: document.getElementById("premiumModal"),
  topbarExplorePremiumBtn: document.getElementById("premiumBtn") || document.getElementById("topbarExplorePremiumBtn"),
  closePremiumModal: document.getElementById("closePremiumModal"),

  installModal: document.getElementById("installModal"),
  topbarInstallBtn: document.getElementById("installBtn") || document.getElementById("topbarInstallBtn"),
  closeInstallModal: document.getElementById("closeInstallModal"),

  devicesModal: document.getElementById("devicesModal"),
  closeDevicesModal: document.getElementById("closeDevicesModal"),

  shortcutsModal: document.getElementById("shortcutsModal"),
  shortcutsBtn: document.getElementById("shortcutsBtn"),
  closeShortcutsModal: document.getElementById("closeShortcutsModal"),

  profileModal: document.getElementById("profileModal"),
  closeProfileModal: document.getElementById("closeProfileModal"),
  menuProfileBtn: document.getElementById("menuProfileBtn"),
  menuPremiumBtn: document.getElementById("menuPremiumBtn"),

  artZoomModal: document.getElementById("artZoomModal"),
  closeArtZoomModal: document.getElementById("closeArtZoomModal"),
  artZoomImg: document.getElementById("artZoomImg"),
  artZoomTitle: document.getElementById("artZoomTitle"),
  artZoomArtist: document.getElementById("artZoomArtist"),

  searchResultsFound: document.getElementById("searchResultsFound"),
  searchNoResults: document.getElementById("searchNoResults"),
  noResultsTitle: document.getElementById("noResultsTitle"),
  notificationBtn: document.getElementById("notificationBtn"),
  notificationsFlyout: document.getElementById("notificationsFlyout"),

  userDropdown: document.getElementById("userDropdown"),
  userProfileBtn: document.getElementById("userProfileBtn"),
  toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// 5. LOCAL STORAGE & PERSISTENCE
// ==========================================================================

function loadFromStorage() {
  try {
    const savedLiked = localStorage.getItem("vibez_liked_songs");
    if (savedLiked) {
      state.likedSongIds = new Set(JSON.parse(savedLiked));
    }
    const savedPlaylists = localStorage.getItem("vibez_user_playlists");
    if (savedPlaylists) {
      state.userPlaylists = JSON.parse(savedPlaylists);
    }
  } catch (e) {}
}

function saveToStorage() {
  try {
    localStorage.setItem("vibez_liked_songs", JSON.stringify([...state.likedSongIds]));
    localStorage.setItem("vibez_user_playlists", JSON.stringify(state.userPlaylists));
  } catch (e) {}
}

// ==========================================================================
// 6. AUDIO ENGINE & PLAYBACK CONTROLLER
// ==========================================================================

function setTrack(song, autoPlay = true) {
  state.currentTrack = song;
  state.currentIndex = state.currentPlaylist.findIndex(t => t.id === song.id);
  if (state.currentIndex === -1) state.currentIndex = 0;

  // Set Audio Source
  elements.audio.src = song.src;
  elements.audio.load();

  // Update Mini Player Bar UI
  elements.nowPlayingTitle.textContent = song.title;
  elements.nowPlayingArtist.textContent = song.artist;
  elements.nowPlayingArt.src = song.cover;
  elements.totalDuration.textContent = song.duration || "3:30";
  elements.currentTime.textContent = "0:00";
  elements.progressBarFill.style.width = "0%";
  elements.progressThumb.style.left = "0%";

  // Update Right Panel UI
  elements.panelAlbumArt.src = song.cover;
  elements.panelTrackTitle.textContent = song.title;
  elements.panelArtistName.textContent = song.artist;
  elements.artistBioName.textContent = song.artist;
  elements.artistBioListeners.textContent = `${song.monthlyListeners || '15,200,000'} monthly listeners`;
  elements.artistBioText.textContent = song.bio || "Top streaming artist on VIBEZ.";
  elements.artistBioCover.style.backgroundColor = song.color || "#242424";

  // Update Ambient Color Header
  updateAmbientHeaderColor(song.color || "#2e3856");

  // Update Lyrics View if open
  if (state.activeView === "lyrics") {
    renderLyrics(song);
  }

  // Update Hearts
  updateLikeButtonsState();

  // Update Rows Playing state
  updateActiveRowVisuals();

  // Update Queue Panel
  updateQueuePanel();

  // MediaSession API integration for OS-level controls
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title,
      artist: song.artist,
      album: song.album,
      artwork: [
        { src: song.cover, sizes: '512x512', type: 'image/png' }
      ]
    });
  }

  if (autoPlay) {
    playAudio();
  } else {
    state.isPlaying = false;
    updatePlayPauseIcons(false);
  }
}

function playAudio() {
  elements.audio.play().then(() => {
    state.isPlaying = true;
    updatePlayPauseIcons(true);
    updateActiveRowVisuals();
  }).catch(() => {
    state.isPlaying = false;
    updatePlayPauseIcons(false);
    updateActiveRowVisuals();
  });
}

function pauseAudio() {
  elements.audio.pause();
  state.isPlaying = false;
  updatePlayPauseIcons(false);
  updateActiveRowVisuals();
}

function togglePlay() {
  if (!state.currentTrack) {
    playSongById(TRACKS_DATA[0].id);
    return;
  }
  if (state.isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
}

function nextSong() {
  if (state.upcomingQueue.length > 0) {
    const nextQ = state.upcomingQueue.shift();
    updateQueuePanel();
    setTrack(nextQ, true);
    return;
  }

  if (state.repeatMode === 1) { // repeat 1
    elements.audio.currentTime = 0;
    playAudio();
    return;
  }

  if (state.isShuffle) {
    const randomIdx = Math.floor(Math.random() * state.currentPlaylist.length);
    setTrack(state.currentPlaylist[randomIdx], true);
    return;
  }

  let nextIdx = state.currentIndex + 1;
  if (nextIdx >= state.currentPlaylist.length) {
    nextIdx = 0;
  }
  setTrack(state.currentPlaylist[nextIdx], true);
}

function prevSong() {
  if (elements.audio.currentTime > 3) {
    elements.audio.currentTime = 0;
    syncLyricsWithTime(0, true);
    return;
  }
  let prevIdx = state.currentIndex - 1;
  if (prevIdx < 0) {
    prevIdx = state.currentPlaylist.length - 1;
  }
  setTrack(state.currentPlaylist[prevIdx], true);
}

function playSongById(id, playlistContext = null) {
  if (playlistContext) {
    state.currentPlaylist = playlistContext;
  }
  const song = TRACKS_DATA.find(t => t.id === id);
  if (song) {
    setTrack(song, true);
  }
}

function updatePlayPauseIcons(isPlaying) {
  const iconSvg = isPlaying
    ? `<path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"/>`
    : `<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"/>`;
  elements.playPauseIcon.innerHTML = iconSvg;
  elements.playPauseBtn.title = isPlaying ? "Pause (Space)" : "Play (Space)";
}

function setupAudioListeners() {
  elements.audio.addEventListener("timeupdate", () => {
    const cur = elements.audio.currentTime || 0;
    const dur = elements.audio.duration || 0;

    elements.currentTime.textContent = formatTime(cur);
    if (!isNaN(dur) && dur > 0) {
      elements.totalDuration.textContent = formatTime(dur);
      const pct = (cur / dur) * 100;
      elements.progressBarFill.style.width = `${pct}%`;
      elements.progressThumb.style.left = `${pct}%`;
    }

    // Synchronize lyrics line highlighting & autoscroll
    syncLyricsWithTime(cur);
  });

  elements.audio.addEventListener("loadedmetadata", () => {
    const dur = elements.audio.duration || 0;
    elements.totalDuration.textContent = formatTime(dur);
  });

  elements.audio.addEventListener("ended", () => {
    nextSong();
  });
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// Scrubber Click & Drag Seeking
let isDraggingSeek = false;

elements.progressBarContainer.addEventListener("mousedown", (e) => {
  isDraggingSeek = true;
  handleSeek(e);
});

window.addEventListener("mousemove", (e) => {
  if (isDraggingSeek) {
    handleSeek(e);
  }
});

window.addEventListener("mouseup", () => {
  isDraggingSeek = false;
});

function handleSeek(e) {
  const rect = elements.progressBarContainer.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  const dur = elements.audio.duration || 0;
  if (dur > 0) {
    elements.audio.currentTime = pct * dur;
    elements.progressBarFill.style.width = `${pct * 100}%`;
    elements.progressThumb.style.left = `${pct * 100}%`;
    syncLyricsWithTime(elements.audio.currentTime, true);
  }
}

// Volume Slider
let isDraggingVolume = false;

elements.volumeSliderContainer.addEventListener("mousedown", (e) => {
  isDraggingVolume = true;
  handleVolume(e);
});

window.addEventListener("mousemove", (e) => {
  if (isDraggingVolume) {
    handleVolume(e);
  }
});

window.addEventListener("mouseup", () => {
  isDraggingVolume = false;
});

function handleVolume(e) {
  const rect = elements.volumeSliderContainer.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const vol = Math.max(0, Math.min(1, clickX / rect.width));
  setVolume(vol);
}

function setVolume(vol) {
  state.volume = vol;
  elements.audio.volume = vol;
  elements.volumeSliderFill.style.width = `${vol * 100}%`;
  elements.volumeThumb.style.left = `${vol * 100}%`;
  updateVolumeIcon(vol);
}

function toggleMute() {
  if (elements.audio.volume > 0) {
    state.previousVolume = elements.audio.volume;
    setVolume(0);
    showToast("Muted");
  } else {
    setVolume(state.previousVolume || 0.8);
    showToast("Unmuted");
  }
}

function updateVolumeIcon(vol) {
  if (vol === 0) {
    elements.volumeIcon.innerHTML = `<path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06zM9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H.75A.75.75 0 0 1 0 10.4V5.6a.75.75 0 0 1 .75-.75h1.316l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.25 6.084H1.5v3.832h1.75l5.375 3.104V2.96z"/>`;
  } else if (vol < 0.5) {
    elements.volumeIcon.innerHTML = `<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H.75A.75.75 0 0 1 0 10.4V5.6a.75.75 0 0 1 .75-.75h1.316l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.25 6.084H1.5v3.832h1.75l5.375 3.104V2.96zM11.5 5.56a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.88.75.75 0 0 1-1.06-1.06 2 2 0 0 0 0-2.76.75.75 0 0 1 0-1.06z"/>`;
  } else {
    elements.volumeIcon.innerHTML = `<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H.75A.75.75 0 0 1 0 10.4V5.6a.75.75 0 0 1 .75-.75h1.316l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.25 6.084H1.5v3.832h1.75l5.375 3.104V2.96zM11.5 5.56a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.88.75.75 0 0 1-1.06-1.06 2 2 0 0 0 0-2.76.75.75 0 0 1 0-1.06zm2.12-2.12a.75.75 0 0 1 1.06 0 6.5 6.5 0 0 1 0 9.12.75.75 0 1 1-1.06-1.06 5 5 0 0 0 0-7 .75.75 0 0 1 0-1.06z"/>`;
  }
}

// Shuffle & Repeat Modes
function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  elements.shuffleBtn.classList.toggle("active", state.isShuffle);
  showToast(state.isShuffle ? "Shuffle on" : "Shuffle off");
}

function toggleRepeat() {
  state.repeatMode = (state.repeatMode + 1) % 3;
  if (state.repeatMode === 0) {
    elements.repeatBtn.classList.remove("active");
    elements.repeatBtn.innerHTML = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"/></svg>`;
    showToast("Repeat off");
  } else if (state.repeatMode === 1) {
    elements.repeatBtn.classList.add("active");
    elements.repeatBtn.innerHTML = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"/><text x="8" y="9.5" font-size="6.5" font-weight="bold" fill="currentColor" text-anchor="middle">1</text></svg>`;
    showToast("Repeat one");
  } else {
    elements.repeatBtn.classList.add("active");
    elements.repeatBtn.innerHTML = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"/></svg>`;
    showToast("Repeat all");
  }
}

// Like / Heart Toggle
function toggleLikeTrack(songId) {
  if (state.likedSongIds.has(songId)) {
    state.likedSongIds.delete(songId);
    showToast("Removed from your Liked Songs");
  } else {
    state.likedSongIds.add(songId);
    showToast("Added to your Liked Songs");
  }
  saveToStorage();
  updateLikedBadge();
  updateLikeButtonsState();
  if (state.activeView === "liked") {
    renderLikedSongsView();
  }
}

function updateLikeButtonsState() {
  if (!state.currentTrack) return;
  const isLiked = state.likedSongIds.has(state.currentTrack.id);
  
  elements.playerLikeBtn.classList.toggle("liked", isLiked);
  elements.panelLikeBtn.classList.toggle("liked", isLiked);

  const filledHeart = `<path fill="currentColor" d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-3.62-1.13 4.315 4.315 0 0 0-3.533 3.406c-.363 2.584.57 5.107 2.406 6.911l5.443 5.347a.75.75 0 0 0 1.05 0l5.443-5.347c1.836-1.804 2.77-4.327 2.407-6.911z"/>`;
  const hollowHeart = `<path fill="currentColor" d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.75 4.6 4.6 0 0 1 16 5.347c0 3.238-2.923 6.08-7.53 10.203a.75.75 0 0 1-.94 0C2.923 11.427 0 8.585 0 5.347 0 3.233 1.488 1.488 3.69 1.25z"/>`;

  elements.playerLikeBtn.querySelector(".heart-icon").innerHTML = isLiked ? filledHeart : hollowHeart;
  elements.panelLikeBtn.querySelector(".heart-icon").innerHTML = isLiked ? filledHeart : hollowHeart;

  // Update track table rows hearts
  document.querySelectorAll(".row-heart-btn").forEach(btn => {
    const tId = parseInt(btn.dataset.trackId);
    const rowLiked = state.likedSongIds.has(tId);
    btn.classList.toggle("liked", rowLiked);
    btn.querySelector(".heart-icon").innerHTML = rowLiked ? filledHeart : hollowHeart;
  });
}

function updateActiveRowVisuals() {
  document.querySelectorAll(".track-row").forEach(row => {
    const rId = parseInt(row.dataset.trackId);
    const isCurrent = state.currentTrack && state.currentTrack.id === rId;
    row.classList.toggle("active", isCurrent);
    row.classList.toggle("playing", isCurrent && state.isPlaying);
  });
}

// Download MP3 Function
function downloadSongMP3(song) {
  if (!song) return;
  const a = document.createElement("a");
  a.href = song.src;
  a.download = `${song.artist} - ${song.title}.mp3`;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
  showToast(`Downloading: ${song.title}...`);
}

// ==========================================================================
// 7. REAL-TIME SYNCHRONIZED LYRICS ENGINE (ACCURATE & CONTINUOUS)
// ==========================================================================

function renderLyrics(song) {
  state.activeLyricIndex = -1;
  const container = elements.lyricsContainer;
  const wrapper = elements.lyricsScrollWrapper || document.getElementById("lyricsScrollWrapper");
  
  elements.lyricsSongTitle.textContent = song.title;
  elements.lyricsArtistName.textContent = song.artist;
  
  if (!song.lyrics || song.lyrics.length === 0) {
    container.innerHTML = `<p class="lyric-line active">♪ Instrumental / Synced lyrics unavailable for this track ♪</p>`;
    return;
  }

  container.innerHTML = song.lyrics.map((l, index) => `
    <div class="lyric-line" data-index="${index}" data-time="${l.time}">
      ${escapeHtml(l.text)}
    </div>
  `).join("");

  // Click line to jump directly
  container.querySelectorAll(".lyric-line").forEach(lineEl => {
    lineEl.addEventListener("click", () => {
      const time = parseFloat(lineEl.dataset.time);
      elements.audio.currentTime = time;
      syncLyricsWithTime(time, true);
      if (!state.isPlaying) playAudio();
    });
  });

  // Re-sync immediately
  syncLyricsWithTime(elements.audio.currentTime || 0, true);
}

function syncLyricsWithTime(currentTime, forceScroll = false) {
  if (!state.currentTrack || !state.currentTrack.lyrics) return;
  const lines = state.currentTrack.lyrics;
  let activeIdx = -1;

  for (let i = 0; i < lines.length; i++) {
    if (currentTime >= lines[i].time) {
      activeIdx = i;
    } else {
      break;
    }
  }

  if (activeIdx !== state.activeLyricIndex || forceScroll) {
    state.activeLyricIndex = activeIdx;
    const domLines = elements.lyricsContainer.querySelectorAll(".lyric-line");
    
    domLines.forEach((el, idx) => {
      if (idx === activeIdx) {
        el.classList.add("active");
        el.classList.remove("past");
        
        // Auto-scroll when lyrics view is active
        if (state.activeView === "lyrics") {
          const wrapper = elements.lyricsScrollWrapper || document.getElementById("lyricsScrollWrapper");
          if (wrapper) {
            // Smoothly center the active lyric line inside the scroll container
            const elTop = el.offsetTop;
            const elHeight = el.offsetHeight;
            const wrapHeight = wrapper.clientHeight;
            wrapper.scrollTo({
              top: Math.max(0, elTop - (wrapHeight / 2) + (elHeight / 2)),
              behavior: "smooth"
            });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      } else if (idx < activeIdx) {
        el.classList.remove("active");
        el.classList.add("past");
      } else {
        el.classList.remove("active");
        el.classList.remove("past");
      }
    });
  }
}

// ==========================================================================
// 8. VIEWS ROUTER & RENDERING
// ==========================================================================

function navigateTo(viewName, param = null) {
  if (state.activeView !== viewName) {
    state.previousView = state.activeView;
    state.viewHistory.push(viewName);
    state.historyPointer = state.viewHistory.length - 1;
    elements.historyBackBtn.disabled = false;
  }

  state.activeView = viewName;

  // Toggle view containers
  document.querySelectorAll(".view-section").forEach(view => {
    view.classList.remove("active");
  });

  // Update navigation items active state
  elements.navHomeBtn.classList.toggle("active", viewName === "home");
  elements.navSearchBtn.classList.toggle("active", viewName === "search");
  elements.libLikedSongs.classList.toggle("active", viewName === "liked");
  elements.lyricsBtn.classList.toggle("active", viewName === "lyrics");

  // Reset scroll to top
  elements.contentScroll.scrollTop = 0;

  if (viewName === "home") {
    elements.homeView.classList.add("active");
  } else if (viewName === "search") {
    elements.searchView.classList.add("active");
    elements.globalSearchInput.focus();
    if (param) {
      elements.globalSearchInput.value = param;
      handleLiveSearch(param);
    }
  } else if (viewName === "liked") {
    elements.likedView.classList.add("active");
    renderLikedSongsView();
  } else if (viewName === "playlist") {
    elements.playlistView.classList.add("active");
    renderPlaylistDetailView(param);
  } else if (viewName === "lyrics") {
    elements.lyricsView.classList.add("active");
    if (state.currentTrack) {
      renderLyrics(state.currentTrack);
      syncLyricsWithTime(elements.audio.currentTime || 0, true);
    }
  }

  updateActiveRowVisuals();
}

function handleHistoryBack() {
  if (state.historyPointer > 0) {
    state.historyPointer--;
    const view = state.viewHistory[state.historyPointer];
    navigateTo(view);
    elements.historyForwardBtn.disabled = false;
    if (state.historyPointer === 0) elements.historyBackBtn.disabled = true;
  }
}

function handleHistoryForward() {
  if (state.historyPointer < state.viewHistory.length - 1) {
    state.historyPointer++;
    const view = state.viewHistory[state.historyPointer];
    navigateTo(view);
    elements.historyBackBtn.disabled = false;
    if (state.historyPointer === state.viewHistory.length - 1) elements.historyForwardBtn.disabled = true;
  }
}

// Render Sidebar Playlists & Library
function renderSidebarLibrary() {
  const filter = state.libraryFilter;
  let itemsHtml = "";

  if (filter === "playlists") {
    // Combine built-in + user created
    const allPlaylists = [...DEFAULT_PLAYLISTS, ...state.userPlaylists];
    
    // Sort
    if (state.librarySort === "alpha") {
      allPlaylists.sort((a, b) => a.title.localeCompare(b.title));
    }

    itemsHtml = allPlaylists.map(pl => `
      <div class="lib-item ${state.currentPlaylistId === pl.id ? 'active' : ''}" data-playlist-id="${pl.id}">
        <div class="lib-cover" style="background-color: ${pl.color || '#333'};">
          <svg viewBox="0 0 16 16" width="20" height="20" fill="#ffffff"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 2.5 2.5v.75H1V3.5z"/></svg>
        </div>
        <div class="lib-info">
          <span class="lib-title">${escapeHtml(pl.title)}</span>
          <span class="lib-subtitle">Playlist • ${pl.tracks ? pl.tracks.length : 0} songs</span>
        </div>
      </div>
    `).join("");
  } else if (filter === "artists") {
    // Unique artists list
    const artists = [...new Set(TRACKS_DATA.map(t => t.artist))];
    if (state.librarySort === "alpha") artists.sort();

    itemsHtml = artists.map(art => {
      const s = TRACKS_DATA.find(t => t.artist === art);
      return `
        <div class="lib-item" data-artist-name="${escapeHtml(art)}">
          <div class="lib-cover round">
            <img src="${s ? s.cover : ''}" alt="${escapeHtml(art)}">
          </div>
          <div class="lib-info">
            <span class="lib-title">${escapeHtml(art)}</span>
            <span class="lib-subtitle">Artist</span>
          </div>
        </div>
      `;
    }).join("");
  } else if (filter === "albums") {
    const albums = [...new Set(TRACKS_DATA.map(t => t.album))];
    itemsHtml = albums.map(alb => {
      const s = TRACKS_DATA.find(t => t.album === alb);
      return `
        <div class="lib-item" data-album-name="${escapeHtml(alb)}">
          <div class="lib-cover">
            <img src="${s ? s.cover : ''}" alt="${escapeHtml(alb)}">
          </div>
          <div class="lib-info">
            <span class="lib-title">${escapeHtml(alb)}</span>
            <span class="lib-subtitle">Album • ${s ? escapeHtml(s.artist) : ''}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  elements.customPlaylistsList.innerHTML = itemsHtml;

  // Add click handlers for library items
  elements.customPlaylistsList.querySelectorAll(".lib-item").forEach(item => {
    item.addEventListener("click", () => {
      if (item.dataset.playlistId) {
        navigateTo("playlist", item.dataset.playlistId);
      } else if (item.dataset.artistName) {
        navigateTo("search", item.dataset.artistName);
      } else if (item.dataset.albumName) {
        navigateTo("search", item.dataset.albumName);
      }
    });
  });
}

function updateLikedBadge() {
  const count = state.likedSongIds.size;
  elements.libLikedCount.textContent = `${count} songs`;
}

// Render Track Rows for Tables
function renderTrackRows(container, tracksList) {
  container.innerHTML = tracksList.map((song, index) => {
    const isLiked = state.likedSongIds.has(song.id);
    const isCurrent = state.currentTrack && state.currentTrack.id === song.id;
    return `
      <div class="track-row ${isCurrent ? 'active' : ''} ${isCurrent && state.isPlaying ? 'playing' : ''}" data-track-id="${song.id}">
        <div class="col-num">
          <span class="track-index">${index + 1}</span>
          <button class="row-play-btn" title="Play ${escapeHtml(song.title)}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
          </button>
          <div class="playing-eq-bars">
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
          </div>
        </div>
        <div class="col-title">
          <div class="track-thumb">
            <img src="${song.cover}" alt="${escapeHtml(song.title)}" data-track-cover-id="${song.id}">
          </div>
          <div class="track-info-col">
            <span class="track-title-text">${escapeHtml(song.title)}</span>
            <span class="track-artist-text">${escapeHtml(song.artist)}</span>
          </div>
        </div>
        <div class="col-album">${escapeHtml(song.album)}</div>
        <div class="col-date">${index % 2 === 0 ? '3 days ago' : '1 week ago'}</div>
        <div class="col-duration">
          <button class="row-heart-btn ${isLiked ? 'liked' : ''}" data-track-id="${song.id}" title="${isLiked ? 'Remove from Liked Songs' : 'Save to Liked Songs'}">
            <svg viewBox="0 0 16 16" width="16" height="16" class="heart-icon">
              ${isLiked
                ? `<path fill="currentColor" d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-3.62-1.13 4.315 4.315 0 0 0-3.533 3.406c-.363 2.584.57 5.107 2.406 6.911l5.443 5.347a.75.75 0 0 0 1.05 0l5.443-5.347c1.836-1.804 2.77-4.327 2.407-6.911z"/>`
                : `<path fill="currentColor" d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.75 4.6 4.6 0 0 1 16 5.347c0 3.238-2.923 6.08-7.53 10.203a.75.75 0 0 1-.94 0C2.923 11.427 0 8.585 0 5.347 0 3.233 1.488 1.488 3.69 1.25z"/>`
              }
            </svg>
          </button>
          <span>${song.duration || "3:30"}</span>
          <button class="row-menu-btn" data-track-id="${song.id}" title="More options">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Attach click listeners to rows
  container.querySelectorAll(".track-row").forEach(row => {
    row.addEventListener("click", (e) => {
      if (e.target.closest(".row-heart-btn")) {
        const id = parseInt(e.target.closest(".row-heart-btn").dataset.trackId);
        toggleLikeTrack(id);
        return;
      }
      if (e.target.closest(".row-menu-btn")) {
        const id = parseInt(e.target.closest(".row-menu-btn").dataset.trackId);
        openTrackContextMenu(e, id);
        return;
      }
      const tId = parseInt(row.dataset.trackId);
      if (state.currentTrack && state.currentTrack.id === tId) {
        togglePlay();
      } else {
        playSongById(tId, tracksList);
      }
    });

    // Right click for context menu
    row.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const tId = parseInt(row.dataset.trackId);
      openTrackContextMenu(e, tId);
    });
  });
}

// Render Liked Songs View
function renderLikedSongsView() {
  const likedSongs = TRACKS_DATA.filter(t => state.likedSongIds.has(t.id));
  elements.likedHeroCount.textContent = `${likedSongs.length} songs`;
  elements.likedHeroDuration = `${Math.ceil((likedSongs.length * 3.4))} min`;

  if (likedSongs.length === 0) {
    elements.likedTrackRows.innerHTML = `
      <div style="padding: 60px 16px; text-align: center; color: var(--text-subdued);">
        <h3>Songs you like will appear here</h3>
        <p style="margin-top: 8px;">Save songs by tapping the heart icon on any track or using shortcut key 'L'.</p>
      </div>
    `;
    return;
  }

  renderTrackRows(elements.likedTrackRows, likedSongs);
}

// Render Playlist Detail View
function renderPlaylistDetailView(playlistId) {
  let pl = DEFAULT_PLAYLISTS.find(p => p.id === playlistId);
  if (!pl) {
    pl = state.userPlaylists.find(p => p.id === playlistId) || DEFAULT_PLAYLISTS[0];
  }
  state.currentPlaylistId = pl.id;

  elements.playlistHeroTitle.textContent = pl.title;
  elements.playlistHeroDesc.textContent = pl.desc || "Custom playlist";
  
  const tracks = TRACKS_DATA.filter(t => pl.tracks && pl.tracks.includes(t.id));
  elements.playlistHeroCount.textContent = `${tracks.length} songs`;
  elements.playlistHeroDuration.textContent = `${Math.ceil(tracks.length * 3.5)} min`;

  elements.playlistHeroCover.style.backgroundColor = pl.color || '#333';
  elements.playlistHeroCover.innerHTML = `<img src="${tracks[0] ? tracks[0].cover : ''}" alt="${escapeHtml(pl.title)}">`;

  renderTrackRows(elements.playlistTrackRows, tracks.length > 0 ? tracks : TRACKS_DATA);
}

// Render Browse Categories in Search View
function renderBrowseGenres() {
  elements.browseGrid.innerHTML = BROWSE_GENRES.map(g => {
    const song = TRACKS_DATA.find(t => t.id === g.track);
    return `
      <div class="genre-card" style="background-color: ${g.color};" data-genre="${escapeHtml(g.name)}" data-track-id="${g.track}">
        <h3 class="genre-title">${escapeHtml(g.name)}</h3>
        <div class="genre-icon-art">
          <img src="${song ? song.cover : ''}" alt="${escapeHtml(g.name)}" data-track-cover-id="${song ? song.id : ''}">
        </div>
      </div>
    `;
  }).join("");

  elements.browseGrid.querySelectorAll(".genre-card").forEach(c => {
    c.addEventListener("click", () => {
      const tId = parseInt(c.dataset.trackId);
      playSongById(tId, TRACKS_DATA);
    });
  });
}

// ==========================================================================
// 9. INSTANT LIVE SEARCH ENGINE (WORKS ON ANY SONG/ARTIST IMMEDIATELY)
// ==========================================================================

function handleLiveSearch(query) {
  const cleanQ = query.trim().toLowerCase();
  
  if (state.activeView !== "search") {
    navigateTo("search");
  }

  if (cleanQ.length === 0) {
    elements.searchResultsSection.style.display = "none";
    elements.browseCategoriesSection.style.display = "block";
    return;
  }

  elements.browseCategoriesSection.style.display = "none";
  elements.searchResultsSection.style.display = "block";

  const matches = TRACKS_DATA.filter(s =>
    s.title.toLowerCase().includes(cleanQ) ||
    s.artist.toLowerCase().includes(cleanQ) ||
    s.album.toLowerCase().includes(cleanQ)
  );

  const foundWrap = elements.searchResultsFound || document.getElementById("searchResultsFound");
  const noResWrap = elements.searchNoResults || document.getElementById("searchNoResults");
  const noResTitle = elements.noResultsTitle || document.getElementById("noResultsTitle");

  if (matches.length === 0) {
    if (foundWrap) foundWrap.style.display = "none";
    if (noResWrap) noResWrap.style.display = "block";
    if (noResTitle) noResTitle.textContent = `No results found for "${escapeHtml(query)}"`;
    return;
  }

  if (foundWrap) foundWrap.style.display = "block";
  if (noResWrap) noResWrap.style.display = "none";

  // Top match
  const top = matches[0];
  elements.topResultCard.innerHTML = `
    <h3 class="search-subheading" style="margin-bottom: 12px;">Top result</h3>
    <img src="${top.cover}" alt="${escapeHtml(top.title)}" class="top-result-img" data-track-cover-id="${top.id}">
    <h2 class="top-result-title">${escapeHtml(top.title)}</h2>
    <div class="top-result-meta">
      <span class="track-artist-text">${escapeHtml(top.artist)}</span>
      <span class="tag-badge">Song • ${escapeHtml(top.album)}</span>
    </div>
    <button class="card-play-btn" style="opacity: 1; position: absolute; right: 20px; bottom: 20px;" title="Play">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
    </button>
  `;

  elements.topResultCard.onclick = () => {
    playSongById(top.id, matches);
  };

  // Mini rows (matching songs list)
  elements.searchMiniRows.innerHTML = matches.slice(0, 5).map(s => `
    <div class="track-row" data-track-id="${s.id}" style="grid-template-columns: 36px 1fr 60px;">
      <div class="col-num">
        <button class="row-play-btn" style="display:block;">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
        </button>
      </div>
      <div class="col-title">
        <div class="track-thumb">
          <img src="${s.cover}" alt="${escapeHtml(s.title)}" data-track-cover-id="${s.id}">
        </div>
        <div class="track-info-col">
          <span class="track-title-text">${escapeHtml(s.title)}</span>
          <span class="track-artist-text">${escapeHtml(s.artist)}</span>
        </div>
      </div>
      <div class="col-duration">${s.duration || "3:30"}</div>
    </div>
  `).join("");

  elements.searchMiniRows.querySelectorAll(".track-row").forEach(r => {
    r.addEventListener("click", () => {
      playSongById(parseInt(r.dataset.trackId), matches);
    });
  });

  // Matching Artists Row
  const matchedArtists = [...new Set(matches.map(m => m.artist))];
  elements.searchArtistsRow.innerHTML = matchedArtists.map(artName => {
    const song = TRACKS_DATA.find(t => t.artist === artName);
    return `
      <div class="music-card card-artist" data-artist-name="${escapeHtml(artName)}">
        <div class="card-img-wrap">
          <img src="${song ? song.cover : ''}" alt="${escapeHtml(artName)}">
          <button class="card-play-btn" title="Play">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
          </button>
        </div>
        <h4 class="card-title">${escapeHtml(artName)}</h4>
        <p class="card-desc">Artist</p>
      </div>
    `;
  }).join("");

  elements.searchArtistsRow.querySelectorAll(".music-card").forEach(c => {
    c.addEventListener("click", () => {
      const art = c.dataset.artistName;
      elements.globalSearchInput.value = art;
      handleLiveSearch(art);
    });
  });
}

// Update Queue in Right Sidebar
function updateQueuePanel() {
  if (!state.currentTrack) return;
  
  // Next item preview in Now Playing
  let nextSong = state.upcomingQueue.length > 0 ? state.upcomingQueue[0] : null;
  if (!nextSong) {
    let nextIdx = (state.currentIndex + 1) % state.currentPlaylist.length;
    nextSong = state.currentPlaylist[nextIdx];
  }

  if (nextSong) {
    elements.nextQueueItem.innerHTML = `
      <div class="lib-item" style="padding: 4px 0;" data-track-id="${nextSong.id}">
        <div class="lib-cover" style="width: 40px; height: 40px;">
          <img src="${nextSong.cover}" alt="${escapeHtml(nextSong.title)}">
        </div>
        <div class="lib-info">
          <span class="lib-title">${escapeHtml(nextSong.title)}</span>
          <span class="lib-subtitle">${escapeHtml(nextSong.artist)}</span>
        </div>
      </div>
    `;
    elements.nextQueueItem.onclick = () => {
      setTrack(nextSong, true);
    };
  }

  // Full Queue subpanel list
  elements.queueNowPlayingItem.innerHTML = `
    <div class="lib-item active" style="padding: 6px 8px;">
      <div class="lib-cover" style="width: 40px; height: 40px;">
        <img src="${state.currentTrack.cover}" alt="${escapeHtml(state.currentTrack.title)}">
      </div>
      <div class="lib-info">
        <span class="lib-title" style="color: var(--vibez-green);">${escapeHtml(state.currentTrack.title)}</span>
        <span class="lib-subtitle">${escapeHtml(state.currentTrack.artist)}</span>
      </div>
    </div>
  `;

  // Upcoming items: state.upcomingQueue first, then remaining in playlist
  const listToRender = [...state.upcomingQueue];
  for (let i = 1; i <= Math.min(8, state.currentPlaylist.length - 1); i++) {
    const idx = (state.currentIndex + i) % state.currentPlaylist.length;
    const s = state.currentPlaylist[idx];
    if (!listToRender.some(item => item.id === s.id)) {
      listToRender.push(s);
    }
  }

  elements.queueUpcomingList.innerHTML = listToRender.map(s => `
    <div class="lib-item" style="padding: 6px 8px;" data-track-id="${s.id}">
      <div class="lib-cover" style="width: 40px; height: 40px;">
        <img src="${s.cover}" alt="${escapeHtml(s.title)}">
      </div>
      <div class="lib-info">
        <span class="lib-title">${escapeHtml(s.title)}</span>
        <span class="lib-subtitle">${escapeHtml(s.artist)}</span>
      </div>
    </div>
  `).join("");

  elements.queueUpcomingList.querySelectorAll(".lib-item").forEach(item => {
    item.addEventListener("click", () => {
      playSongById(parseInt(item.dataset.trackId));
    });
  });
}

function toggleRightSidebar(subpanel = "now-playing") {
  if (state.rightSidebarOpen && state.rightSidebarSubpanel === subpanel) {
    elements.rightSidebar.classList.remove("open");
    state.rightSidebarOpen = false;
    elements.nowPlayingViewBtn.classList.remove("active");
    elements.queueBtn.classList.remove("active");
  } else {
    elements.rightSidebar.classList.add("open");
    state.rightSidebarOpen = true;
    state.rightSidebarSubpanel = subpanel;
    
    if (subpanel === "now-playing") {
      elements.rightPanelTitle.textContent = "Now Playing";
      elements.nowPlayingViewSubpanel.style.display = "block";
      elements.queueViewSubpanel.style.display = "none";
      elements.nowPlayingViewBtn.classList.add("active");
      elements.queueBtn.classList.remove("active");
    } else {
      elements.rightPanelTitle.textContent = "Queue";
      elements.nowPlayingViewSubpanel.style.display = "none";
      elements.queueViewSubpanel.style.display = "block";
      elements.nowPlayingViewBtn.classList.remove("active");
      elements.queueBtn.classList.add("active");
      updateQueuePanel();
    }
  }
}

// ==========================================================================
// 10. CONTEXT MENU & INTERACTIVE MODALS
// ==========================================================================

function openTrackContextMenu(e, trackId) {
  e.preventDefault();
  const song = TRACKS_DATA.find(t => t.id === trackId);
  if (!song) return;
  state.contextMenuTrack = song;

  const isLiked = state.likedSongIds.has(song.id);
  document.getElementById("ctxLikeLabel").textContent = isLiked ? "Remove from Liked Songs" : "Save to your Liked Songs";

  const menu = elements.trackContextMenu;
  menu.style.display = "flex";

  const x = Math.min(window.innerWidth - 220, e.clientX);
  const y = Math.min(window.innerHeight - 260, e.clientY);
  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
}

function closeTrackContextMenu() {
  elements.trackContextMenu.style.display = "none";
}

function setupContextMenus() {
  window.addEventListener("click", () => {
    closeTrackContextMenu();
  });

  document.getElementById("ctxPlay").addEventListener("click", () => {
    if (state.contextMenuTrack) playSongById(state.contextMenuTrack.id);
    closeTrackContextMenu();
  });

  document.getElementById("ctxAddToQueue").addEventListener("click", () => {
    if (state.contextMenuTrack) {
      state.upcomingQueue.push(state.contextMenuTrack);
      showToast(`Added to queue: ${state.contextMenuTrack.title}`);
      updateQueuePanel();
    }
    closeTrackContextMenu();
  });

  document.getElementById("ctxToggleLike").addEventListener("click", () => {
    if (state.contextMenuTrack) {
      toggleLikeTrack(state.contextMenuTrack.id);
    }
    closeTrackContextMenu();
  });

  document.getElementById("ctxViewLyrics").addEventListener("click", () => {
    if (state.contextMenuTrack) {
      setTrack(state.contextMenuTrack, true);
      navigateTo("lyrics");
    }
    closeTrackContextMenu();
  });

  document.getElementById("ctxGoToArtist").addEventListener("click", () => {
    if (state.contextMenuTrack) {
      navigateTo("search", state.contextMenuTrack.artist);
    }
    closeTrackContextMenu();
  });

  document.getElementById("ctxDownload").addEventListener("click", () => {
    if (state.contextMenuTrack) {
      downloadSongMP3(state.contextMenuTrack);
    }
    closeTrackContextMenu();
  });

  document.getElementById("ctxCopyLink").addEventListener("click", () => {
    if (state.contextMenuTrack) {
      navigator.clipboard.writeText(state.contextMenuTrack.src).then(() => {
        showToast("Audio link copied to clipboard!");
      }).catch(() => {
        showToast("Link: " + state.contextMenuTrack.src);
      });
    }
    closeTrackContextMenu();
  });
}

// ==========================================================================
// 11. EVENT LISTENERS SETUP
// ==========================================================================

function setupEventListeners() {
  // Brand Logo Click -> Navigate Home
  if (elements.brandLogo) {
    elements.brandLogo.addEventListener("click", () => navigateTo("home"));
  }

  // Navigation Buttons
  elements.navHomeBtn.addEventListener("click", () => navigateTo("home"));
  elements.topbarHomeBtn.addEventListener("click", () => navigateTo("home"));
  elements.navSearchBtn.addEventListener("click", () => navigateTo("search"));
  elements.libLikedSongs.addEventListener("click", () => navigateTo("liked"));

  elements.historyBackBtn.addEventListener("click", handleHistoryBack);
  elements.historyForwardBtn.addEventListener("click", handleHistoryForward);

  // Global Search Input (Immediate response)
  elements.globalSearchInput.addEventListener("input", (e) => {
    const q = e.target.value;
    elements.searchClearBtn.style.display = q ? "block" : "none";
    handleLiveSearch(q);
  });

  elements.globalSearchInput.addEventListener("focus", () => {
    if (state.activeView !== "search") {
      navigateTo("search");
    }
  });

  elements.globalSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = elements.globalSearchInput.value.trim().toLowerCase();
      const firstMatch = TRACKS_DATA.find(s =>
        s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
      );
      if (firstMatch) playSongById(firstMatch.id);
    }
  });

  elements.searchClearBtn.addEventListener("click", () => {
    elements.globalSearchInput.value = "";
    elements.searchClearBtn.style.display = "none";
    handleLiveSearch("");
    elements.globalSearchInput.focus();
  });

  // Home Filter Chips (All, Music, Podcasts)
  document.querySelectorAll("[data-home-filter]").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("[data-home-filter]").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.homeFilter = chip.dataset.homeFilter;

      if (state.homeFilter === "all") {
        elements.homeMusicSubcontainer.style.display = "block";
        elements.homePodcastsSubcontainer.style.display = "none";
      } else if (state.homeFilter === "music") {
        elements.homeMusicSubcontainer.style.display = "block";
        elements.homePodcastsSubcontainer.style.display = "none";
      } else if (state.homeFilter === "podcasts") {
        elements.homeMusicSubcontainer.style.display = "none";
        elements.homePodcastsSubcontainer.style.display = "block";
      }
    });
  });

  // Library Filter Chips
  document.querySelectorAll("[data-lib-filter]").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("[data-lib-filter]").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.libraryFilter = chip.dataset.libFilter;
      renderSidebarLibrary();
    });
  });

  // Play All Buttons
  elements.playAllHomeBtn.addEventListener("click", () => {
    playSongById(TRACKS_DATA[0].id, TRACKS_DATA);
  });

  elements.playLikedBtn.addEventListener("click", () => {
    const liked = TRACKS_DATA.filter(t => state.likedSongIds.has(t.id));
    if (liked.length > 0) playSongById(liked[0].id, liked);
  });

  elements.shuffleLikedBtn.addEventListener("click", () => {
    const liked = TRACKS_DATA.filter(t => state.likedSongIds.has(t.id));
    if (liked.length > 0) {
      state.isShuffle = true;
      elements.shuffleBtn.classList.add("active");
      const rIdx = Math.floor(Math.random() * liked.length);
      playSongById(liked[rIdx].id, liked);
      showToast("Shuffling Liked Songs");
    }
  });

  elements.downloadLikedBtn.addEventListener("click", () => {
    showToast("Starting download of all Liked Songs...");
    const liked = TRACKS_DATA.filter(t => state.likedSongIds.has(t.id));
    if (liked.length > 0) {
      downloadSongMP3(liked[0]);
    }
  });

  elements.playPlaylistHeroBtn.addEventListener("click", () => {
    let pl = DEFAULT_PLAYLISTS.find(p => p.id === state.currentPlaylistId) || state.userPlaylists.find(p => p.id === state.currentPlaylistId);
    if (pl && pl.tracks && pl.tracks.length > 0) {
      const plTracks = TRACKS_DATA.filter(t => pl.tracks.includes(t.id));
      playSongById(plTracks[0].id, plTracks);
    }
  });

  elements.shufflePlaylistHeroBtn.addEventListener("click", () => {
    let pl = DEFAULT_PLAYLISTS.find(p => p.id === state.currentPlaylistId) || state.userPlaylists.find(p => p.id === state.currentPlaylistId);
    if (pl && pl.tracks && pl.tracks.length > 0) {
      const plTracks = TRACKS_DATA.filter(t => pl.tracks.includes(t.id));
      state.isShuffle = true;
      elements.shuffleBtn.classList.add("active");
      const r = Math.floor(Math.random() * plTracks.length);
      playSongById(plTracks[r].id, plTracks);
      showToast(`Shuffling ${pl.title}`);
    }
  });

  elements.likePlaylistBtn.addEventListener("click", () => {
    elements.likePlaylistBtn.classList.toggle("liked");
    showToast("Added playlist to Your Library");
  });

  // Player Bar Controls
  elements.playPauseBtn.addEventListener("click", togglePlay);
  elements.nextBtn.addEventListener("click", nextSong);
  elements.prevBtn.addEventListener("click", prevSong);
  elements.shuffleBtn.addEventListener("click", toggleShuffle);
  elements.repeatBtn.addEventListener("click", toggleRepeat);
  elements.playerLikeBtn.addEventListener("click", () => {
    if (state.currentTrack) toggleLikeTrack(state.currentTrack.id);
  });
  elements.panelLikeBtn.addEventListener("click", () => {
    if (state.currentTrack) toggleLikeTrack(state.currentTrack.id);
  });

  elements.volumeBtn.addEventListener("click", toggleMute);

  // Sidebars & Lyrics View Controls
  elements.nowPlayingViewBtn.addEventListener("click", () => {
    toggleRightSidebar("now-playing");
  });

  elements.queueBtn.addEventListener("click", () => {
    toggleRightSidebar("queue");
  });

  elements.closeRightSidebarBtn.addEventListener("click", () => {
    elements.rightSidebar.classList.remove("open");
    state.rightSidebarOpen = false;
    elements.nowPlayingViewBtn.classList.remove("active");
    elements.queueBtn.classList.remove("active");
  });

  elements.openQueueLink.addEventListener("click", () => {
    toggleRightSidebar("queue");
  });

  elements.clearQueueBtn.addEventListener("click", () => {
    state.upcomingQueue = [];
    updateQueuePanel();
    showToast("Cleared queue");
  });

  // Lyrics Button Toggle
  elements.lyricsBtn.addEventListener("click", () => {
    if (state.activeView === "lyrics") {
      navigateTo(state.previousView || "home");
    } else {
      navigateTo("lyrics");
    }
  });

  elements.closeLyricsBtn.addEventListener("click", () => {
    navigateTo(state.previousView || "home");
  });

  // Artist Follow Toggle
  elements.artistFollowBtn.addEventListener("click", () => {
    state.isArtistFollowed = !state.isArtistFollowed;
    elements.artistFollowBtn.textContent = state.isArtistFollowed ? "Following" : "Follow";
    elements.artistFollowBtn.classList.toggle("active", state.isArtistFollowed);
    showToast(state.isArtistFollowed ? "Followed artist" : "Unfollowed artist");
  });

  // Fullscreen toggle
  elements.fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      showToast("Fullscreen mode activated");
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // User Profile Dropdown
  elements.userProfileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isShown = elements.userDropdown.classList.contains("show");
    elements.userDropdown.classList.toggle("show", !isShown);
  });

  window.addEventListener("click", () => {
    elements.userDropdown.classList.remove("show");
  });

  // Modal Open/Close Utilities
  const openModal = (m) => {
    if (!m) return;
    m.classList.add("open");
    m.style.display = "flex";
  };
  const closeModal = (m) => {
    if (!m) return;
    m.classList.remove("open");
    m.style.display = "none";
  };

  // Create Playlist Modal
  elements.createPlaylistBtn.addEventListener("click", () => {
    openModal(elements.createPlaylistModal);
    elements.newPlaylistTitleInput.value = `My Playlist #${state.userPlaylists.length + 1}`;
    elements.newPlaylistDescInput.value = "";
    elements.newPlaylistTitleInput.focus();
  });

  if (elements.closeCreatePlaylistModal) {
    elements.closeCreatePlaylistModal.addEventListener("click", () => closeModal(elements.createPlaylistModal));
  }
  if (elements.cancelPlaylistModalBtn) {
    elements.cancelPlaylistModalBtn.addEventListener("click", () => closeModal(elements.createPlaylistModal));
  }

  elements.savePlaylistModalBtn.addEventListener("click", () => {
    const title = elements.newPlaylistTitleInput.value.trim() || `My Playlist #${state.userPlaylists.length + 1}`;
    const desc = elements.newPlaylistDescInput.value.trim();
    const newPl = {
      id: "pl-" + Date.now(),
      title: title,
      desc: desc,
      color: "#1ed760",
      tracks: [state.currentTrack ? state.currentTrack.id : 1]
    };
    state.userPlaylists.push(newPl);
    saveToStorage();
    renderSidebarLibrary();
    closeModal(elements.createPlaylistModal);
    showToast(`Created playlist: ${title}`);
    navigateTo("playlist", newPl.id);
  });

  // Explore Premium Modal
  elements.topbarExplorePremiumBtn.addEventListener("click", () => openModal(elements.premiumModal));
  if (elements.menuPremiumBtn) {
    elements.menuPremiumBtn.addEventListener("click", (e) => {
      e.preventDefault();
      elements.userDropdown.classList.remove("show");
      openModal(elements.premiumModal);
    });
  }
  if (elements.closePremiumModal) {
    elements.closePremiumModal.addEventListener("click", () => closeModal(elements.premiumModal));
  }
  document.querySelectorAll(".plan-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      closeModal(elements.premiumModal);
      showToast(`Subscribed to VIBEZ ${btn.dataset.plan || 'Premium'} plan!`);
    });
  });

  // Install App Modal
  elements.topbarInstallBtn.addEventListener("click", () => openModal(elements.installModal));
  if (elements.closeInstallModal) {
    elements.closeInstallModal.addEventListener("click", () => closeModal(elements.installModal));
  }
  const startDownloadBtn = document.getElementById("startDownloadAppBtn");
  if (startDownloadBtn) {
    startDownloadBtn.addEventListener("click", () => {
      closeModal(elements.installModal);
      showToast("Downloading VIBEZ Desktop installer for Windows...");
    });
  }

  // Connect Devices Modal
  elements.deviceBtn.addEventListener("click", () => openModal(elements.devicesModal));
  if (elements.closeDevicesModal) {
    elements.closeDevicesModal.addEventListener("click", () => closeModal(elements.devicesModal));
  }
  document.querySelectorAll(".device-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".device-item").forEach(d => d.classList.remove("active"));
      item.classList.add("active");
      const dev = item.dataset.device || "Device";
      closeModal(elements.devicesModal);
      showToast(`Connected to ${dev}`);
    });
  });

  // Keyboard Shortcuts Modal
  elements.shortcutsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    elements.userDropdown.classList.remove("show");
    openModal(elements.shortcutsModal);
  });
  if (elements.closeShortcutsModal) {
    elements.closeShortcutsModal.addEventListener("click", () => closeModal(elements.shortcutsModal));
  }

  // Profile Modal
  if (elements.menuProfileBtn) {
    elements.menuProfileBtn.addEventListener("click", (e) => {
      e.preventDefault();
      elements.userDropdown.classList.remove("show");
      openModal(elements.profileModal);
    });
  }
  if (elements.closeProfileModal) {
    elements.closeProfileModal.addEventListener("click", () => closeModal(elements.profileModal));
  }

  // Album Artwork Zoom Modal
  const openArtZoom = () => {
    if (!state.currentTrack) return;
    elements.artZoomImg.src = state.currentTrack.cover;
    elements.artZoomTitle.textContent = state.currentTrack.title;
    elements.artZoomArtist.textContent = state.currentTrack.artist;
    openModal(elements.artZoomModal);
  };
  const miniWrap = document.getElementById("miniArtWrap");
  if (miniWrap) miniWrap.addEventListener("click", openArtZoom);
  const panelWrap = document.getElementById("panelArtWrapper");
  if (panelWrap) panelWrap.addEventListener("click", openArtZoom);
  if (elements.closeArtZoomModal) {
    elements.closeArtZoomModal.addEventListener("click", () => closeModal(elements.artZoomModal));
  }

  // Notification Flyout ("What's New")
  const notifBtn = elements.notificationBtn || document.getElementById("notificationBtn");
  const notifFlyout = elements.notificationsFlyout || document.getElementById("notificationsFlyout");
  if (notifBtn && notifFlyout) {
    notifBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      notifFlyout.classList.toggle("show");
    });
    notifFlyout.querySelectorAll(".notif-item").forEach(item => {
      item.addEventListener("click", () => {
        const tId = parseInt(item.dataset.trackId);
        if (tId) playSongById(tId, TRACKS_DATA);
        notifFlyout.classList.remove("show");
      });
    });
  }
  window.addEventListener("click", (e) => {
    if (notifFlyout && !e.target.closest(".notifications-wrapper")) {
      notifFlyout.classList.remove("show");
    }
  });

  // Settings dropdown item
  const settingsBtn = document.getElementById("menuSettingsBtn");
  if (settingsBtn) {
    settingsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      elements.userDropdown.classList.remove("show");
      showToast("VIBEZ Audio Quality: Very High (320kbps Lossless)");
    });
  }

  // Show All Shelf buttons
  const showAllMade = document.getElementById("showAllMadeForYou");
  if (showAllMade) {
    showAllMade.addEventListener("click", () => {
      navigateTo("playlist", DEFAULT_PLAYLISTS[0].id);
    });
  }
  const showAllHits = document.getElementById("showAllHits");
  if (showAllHits) {
    showAllHits.addEventListener("click", () => {
      navigateTo("playlist", "todays-top-hits");
    });
  }

  // Library Toggle (Collapse / Expand)
  const libToggle = document.getElementById("libToggleBtn");
  if (libToggle) {
    libToggle.addEventListener("click", () => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        sidebar.classList.toggle("collapsed");
        showToast(sidebar.classList.contains("collapsed") ? "Library collapsed" : "Library expanded");
      }
    });
  }
  const viewMoreLib = document.getElementById("viewMoreLibBtn");
  if (viewMoreLib) {
    viewMoreLib.addEventListener("click", () => {
      navigateTo("liked");
    });
  }

  // Library Search Input Filter
  const libSearchInp = document.getElementById("libSearchInput");
  if (libSearchInp) {
    libSearchInp.addEventListener("input", (e) => {
      const term = e.target.value.trim().toLowerCase();
      document.querySelectorAll("#customPlaylistsList .lib-item").forEach(item => {
        const title = (item.querySelector(".lib-title")?.textContent || "").toLowerCase();
        const sub = (item.querySelector(".lib-subtitle")?.textContent || "").toLowerCase();
        item.style.display = (title.includes(term) || sub.includes(term)) ? "flex" : "none";
      });
    });
  }

  // Library Sort Dropdown
  const libSortBtn = document.getElementById("libSortBtn");
  const sortMenu = document.getElementById("sortDropdownMenu");
  if (libSortBtn && sortMenu) {
    libSortBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      sortMenu.classList.toggle("show");
    });
    sortMenu.querySelectorAll(".sort-opt").forEach(opt => {
      opt.addEventListener("click", () => {
        sortMenu.querySelectorAll(".sort-opt").forEach(o => o.classList.remove("active"));
        opt.classList.add("active");
        state.librarySort = opt.dataset.sort;
        const label = document.getElementById("currentSortLabel");
        if (label) label.textContent = opt.textContent;
        sortMenu.classList.remove("show");
        renderSidebarLibrary();
      });
    });
    window.addEventListener("click", () => {
      sortMenu.classList.remove("show");
    });
  }

  // Mini artwork expand button
  const expandBtn = document.getElementById("expandArtBtn");
  if (expandBtn) {
    expandBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openArtZoom();
    });
  }

  // Menu Logout toast
  const logoutBtn = document.getElementById("menuLogoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      elements.userDropdown.classList.remove("show");
      showToast("Logged out of VIBEZ");
    });
  }

  // Close modals when clicking backdrop
  document.querySelectorAll(".modal-overlay").forEach(m => {
    m.addEventListener("click", (e) => {
      if (e.target === m) {
        closeModal(m);
      }
    });
  });

  // Comprehensive Keyboard Shortcuts Handler
  window.addEventListener("keydown", (e) => {
    // If typing in an input or textarea, only handle Escape to unfocus
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      if (e.key === "Escape") {
        document.activeElement.blur();
      }
      return;
    }

    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    } else if ((e.key === "ArrowRight" && e.shiftKey) || e.key === "n" || e.key === "N") {
      e.preventDefault();
      nextSong();
      showToast(`Next: ${state.currentTrack ? state.currentTrack.title : ''}`);
    } else if ((e.key === "ArrowLeft" && e.shiftKey) || e.key === "p" || e.key === "P") {
      e.preventDefault();
      prevSong();
      showToast(`Previous: ${state.currentTrack ? state.currentTrack.title : ''}`);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const dur = elements.audio.duration || 0;
      if (dur > 0) {
        elements.audio.currentTime = Math.min(dur, elements.audio.currentTime + 5);
        syncLyricsWithTime(elements.audio.currentTime, true);
        showToast(`+5s (${formatTime(elements.audio.currentTime)})`);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const dur = elements.audio.duration || 0;
      if (dur > 0) {
        elements.audio.currentTime = Math.max(0, elements.audio.currentTime - 5);
        syncLyricsWithTime(elements.audio.currentTime, true);
        showToast(`-5s (${formatTime(elements.audio.currentTime)})`);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newVol = Math.min(1, state.volume + 0.05);
      setVolume(newVol);
      showToast(`Volume: ${Math.round(newVol * 100)}%`);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newVol = Math.max(0, state.volume - 0.05);
      setVolume(newVol);
      showToast(`Volume: ${Math.round(newVol * 100)}%`);
    } else if (e.key === "m" || e.key === "M") {
      toggleMute();
    } else if (e.key === "l" || e.key === "L") {
      if (state.currentTrack) toggleLikeTrack(state.currentTrack.id);
    } else if (e.key === "s" || e.key === "S") {
      toggleShuffle();
    } else if (e.key === "r" || e.key === "R") {
      toggleRepeat();
    } else if (e.key === "t" || e.key === "T") {
      if (state.activeView === "lyrics") {
        navigateTo(state.previousView || "home");
      } else {
        navigateTo("lyrics");
      }
    } else if (e.key === "f" || e.key === "F") {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        showToast("Fullscreen mode on");
      } else {
        document.exitFullscreen().catch(() => {});
        showToast("Fullscreen mode off");
      }
    } else if (e.key === "q" || e.key === "Q") {
      toggleRightSidebar("queue");
    } else if (e.key === "/") {
      e.preventDefault();
      if (state.activeView !== "search") navigateTo("search");
      elements.globalSearchInput.focus();
    } else if (e.key === "?" || (e.shiftKey && e.key === "?")) {
      e.preventDefault();
      openModal(elements.shortcutsModal);
    } else if (e.key === "Escape") {
      // Close all active modals & menus
      document.querySelectorAll(".modal-overlay.open").forEach(m => closeModal(m));
      elements.userDropdown.classList.remove("show");
      if (notifFlyout) notifFlyout.classList.remove("show");
      closeTrackContextMenu();
    }
  });
}

// Toast Notification System
function showToast(msg) {
  const container = document.getElementById("toastContainer") || document.body;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2200);
}

// Ambient Background Color transition
function updateAmbientHeaderColor(colorHex) {
  if (!elements.ambientHeaderBg) return;
  elements.ambientHeaderBg.style.background = `linear-gradient(180deg, ${colorHex} 0%, rgba(18, 18, 18, 0.95) 70%, #121212 100%)`;
}

// Greeting according to real time of day
function setTimeGreeting() {
  const hr = new Date().getHours();
  let greeting = "Good evening";
  if (hr >= 4 && hr < 12) greeting = "Good morning";
  else if (hr >= 12 && hr < 17) greeting = "Good afternoon";
  elements.greetingText.textContent = greeting;
}

// ==========================================================================
// 12. INITIALIZATION
// ==========================================================================

function initApp() {
  loadFromStorage();
  setTimeGreeting();

  // 1. Render Home Quick Grid (6 items)
  const quickItems = TRACKS_DATA.slice(0, 6);
  elements.quickGrid.innerHTML = quickItems.map(s => `
    <div class="quick-card" data-track-id="${s.id}">
      <div class="quick-card-art">
        <img src="${s.cover}" alt="${escapeHtml(s.title)}" data-track-cover-id="${s.id}">
      </div>
      <span class="quick-card-title">${escapeHtml(s.title)}</span>
      <button class="quick-play-btn" title="Play">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
      </button>
    </div>
  `).join("");

  elements.quickGrid.querySelectorAll(".quick-card").forEach(c => {
    c.addEventListener("click", () => {
      const tId = parseInt(c.dataset.trackId);
      playSongById(tId, TRACKS_DATA);
    });
  });

  // 2. Render Made For You Row (Playlists)
  elements.madeForYouRow.innerHTML = DEFAULT_PLAYLISTS.map(pl => {
    const firstSong = TRACKS_DATA.find(t => pl.tracks && pl.tracks.includes(t.id)) || TRACKS_DATA[0];
    return `
      <div class="music-card" data-playlist-id="${pl.id}">
        <div class="card-img-wrap">
          <img src="${firstSong.cover}" alt="${escapeHtml(pl.title)}">
          <button class="card-play-btn" title="Play ${escapeHtml(pl.title)}">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
          </button>
        </div>
        <h4 class="card-title">${escapeHtml(pl.title)}</h4>
        <p class="card-desc">${escapeHtml(pl.desc)}</p>
      </div>
    `;
  }).join("");

  elements.madeForYouRow.querySelectorAll(".music-card").forEach(c => {
    c.addEventListener("click", (e) => {
      const plId = c.dataset.playlistId;
      if (e.target.closest(".card-play-btn")) {
        const pl = DEFAULT_PLAYLISTS.find(p => p.id === plId);
        if (pl && pl.tracks.length > 0) {
          const list = TRACKS_DATA.filter(t => pl.tracks.includes(t.id));
          playSongById(list[0].id, list);
        }
      } else {
        navigateTo("playlist", plId);
      }
    });
  });

  // 3. Render Today's Biggest Hits Row (Song Cards)
  const biggestHits = [TRACKS_DATA[20], TRACKS_DATA[19], TRACKS_DATA[16], TRACKS_DATA[14], TRACKS_DATA[17], TRACKS_DATA[4], TRACKS_DATA[7], TRACKS_DATA[12]];
  elements.todaysHitsRow.innerHTML = biggestHits.map(s => `
    <div class="music-card" data-track-id="${s.id}">
      <div class="card-img-wrap">
        <img src="${s.cover}" alt="${escapeHtml(s.title)}" data-track-cover-id="${s.id}">
        <button class="card-play-btn" title="Play ${escapeHtml(s.title)}">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
        </button>
      </div>
      <h4 class="card-title">${escapeHtml(s.title)}</h4>
      <p class="card-desc">${escapeHtml(s.artist)}</p>
    </div>
  `).join("");

  elements.todaysHitsRow.querySelectorAll(".music-card").forEach(c => {
    c.addEventListener("click", () => {
      const tId = parseInt(c.dataset.trackId);
      playSongById(tId, TRACKS_DATA);
    });
  });

  // 4. Render Popular Artists Row
  const topArtists = [...new Set(TRACKS_DATA.map(t => t.artist))].slice(0, 8);
  elements.artistsRow.innerHTML = topArtists.map(artName => {
    const s = TRACKS_DATA.find(t => t.artist === artName);
    return `
      <div class="music-card card-artist" data-artist-name="${escapeHtml(artName)}">
        <div class="card-img-wrap">
          <img src="${s ? s.cover : ''}" alt="${escapeHtml(artName)}">
          <button class="card-play-btn" title="Play ${escapeHtml(artName)}">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
          </button>
        </div>
        <h4 class="card-title">${escapeHtml(artName)}</h4>
        <p class="card-desc">Artist</p>
      </div>
    `;
  }).join("");

  elements.artistsRow.querySelectorAll(".music-card").forEach(c => {
    c.addEventListener("click", () => {
      navigateTo("search", c.dataset.artistName);
    });
  });

  // 5. Render Podcasts Subcontainer
  elements.podcastsCardsRow.innerHTML = PODCASTS_DATA.map(pod => {
    const s = TRACKS_DATA.find(t => t.id === pod.trackId) || TRACKS_DATA[0];
    return `
      <div class="music-card" data-track-id="${pod.trackId}">
        <div class="card-img-wrap">
          <img src="${s.cover}" alt="${escapeHtml(pod.title)}">
          <button class="card-play-btn" title="Play Episode">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
          </button>
        </div>
        <h4 class="card-title">${escapeHtml(pod.title)}</h4>
        <p class="card-desc">${escapeHtml(pod.desc)}</p>
      </div>
    `;
  }).join("");

  elements.podcastsCardsRow.querySelectorAll(".music-card").forEach(c => {
    c.addEventListener("click", () => {
      const tId = parseInt(c.dataset.trackId);
      playSongById(tId, TRACKS_DATA);
    });
  });

  // 6. Render Full Track Table on Home View (All 21 Songs)
  renderTrackRows(elements.homeTrackRows, TRACKS_DATA);

  // 7. Render Library Sidebar
  renderSidebarLibrary();
  updateLikedBadge();

  // 8. Render Browse Genres
  renderBrowseGenres();

  // 9. Attach Listeners & Audio Event Handlers
  setupAudioListeners();
  setupEventListeners();
  setupContextMenus();

  // 10. Load Initial Track (Lady Gaga & Bruno Mars - Die With A Smile Acoustic)
  setTrack(TRACKS_DATA[20], false);

  // 11. Fetch high-res artwork in background without blocking
  fetchHighResArtwork();
}

// Run engine on DOM loaded
document.addEventListener("DOMContentLoaded", initApp);
