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

// ==========================================================================
// 2. CURATED PLAYLISTS, PODCASTS, & BROWSE GENRES
// ==========================================================================

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
    coverColor: "#222222"
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

// Popular distinct albums extracted from catalog
const POPULAR_ALBUMS = [
  {
    album: "Die With A Smile - Acoustic",
    artist: "Lady Gaga, Bruno Mars",
    year: "2024",
    color: "#3d6a99",
    tracks: [21]
  },
  {
    album: "End of Beginning",
    artist: "Djo",
    year: "2022",
    color: "#463078",
    tracks: [18]
  },
  {
    album: "Radical Optimism",
    artist: "Dua Lipa",
    year: "2024",
    color: "#b31d3d",
    tracks: [17]
  },
  {
    album: "All My Demons Greeting Me as a Friend",
    artist: "AURORA",
    year: "2015",
    color: "#4a5d6e",
    tracks: [1]
  },
  {
    album: "Nightflight to Venus",
    artist: "Boney M.",
    year: "1978",
    color: "#b84e14",
    tracks: [3]
  },
  {
    album: "I Love You.",
    artist: "The Neighbourhood",
    year: "2013",
    color: "#2f3842",
    tracks: [5]
  },
  {
    album: "Happy Nation",
    artist: "Ace of Base",
    year: "1992",
    color: "#733528",
    tracks: [2]
  },
  {
    album: "Daylight",
    artist: "David Kushner",
    year: "2023",
    color: "#3e4854",
    tracks: [15]
  }
];

// Recommended handpicked songs
const RECOMMENDED_TRACK_IDS = [13, 8, 19, 20, 1, 4, 15, 17, 7, 10];

// ==========================================================================
// 3. SVG ALBUM ART GENERATOR & FALLBACK SYSTEM
// ==========================================================================

function generateCoverSVG(song) {
  const c1 = song.color || "#333333";
  const initials = (song.artist || "VZ").substring(0, 2).toUpperCase();
  const titleShort = (song.title || "Track").length > 18 ? song.title.substring(0, 18) + '...' : (song.title || "Track");
  const artistShort = (song.artist || "VIBEZ").length > 20 ? song.artist.substring(0, 20) + '...' : (song.artist || "VIBEZ");
  
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
    <defs>
      <linearGradient id="grad-${song.id || 'x'}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c1}" />
        <stop offset="60%" stop-color="#121212" />
        <stop offset="100%" stop-color="#050505" />
      </linearGradient>
      <radialGradient id="vinyl-${song.id || 'x'}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#2a2a2a"/>
        <stop offset="35%" stop-color="#111111"/>
        <stop offset="70%" stop-color="#1a1a1a"/>
        <stop offset="100%" stop-color="#0a0a0a"/>
      </radialGradient>
    </defs>
    <rect width="400" height="400" fill="url(#grad-${song.id || 'x'})"/>
    <circle cx="200" cy="165" r="130" fill="url(#vinyl-${song.id || 'x'})" stroke="${c1}" stroke-width="2" opacity="0.85"/>
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
  if (!str) return "";
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeHtml(str) {
  if (!str) return "";
  return str.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, '&quot;')
    .replace(/'/g, "&#039;");
}

// Generate cover data URLs for all tracks
TRACKS_DATA.forEach(t => {
  t.cover = generateCoverSVG(t);
});

// Try to fetch higher-res covers from iTunes Search API in background without blocking
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
    if (elements.nowPlayingArt) elements.nowPlayingArt.src = artUrl;
    if (elements.panelAlbumArt) elements.panelAlbumArt.src = artUrl;
    if (elements.npArtworkImg) elements.npArtworkImg.src = artUrl;
  }
}

// ==========================================================================
// 4. APPLICATION STATE
// ==========================================================================

const state = {
  currentTrack: null,
  currentPlaylist: TRACKS_DATA,
  currentPlaylistId: "master-collection",
  currentAlbumName: null,
  currentIndex: 0,
  userPlaylists: [],
  upcomingQueue: [],
  isPlaying: false,
  isShuffle: false,
  repeatMode: 0, // 0 = off, 1 = repeat one song, 2 = repeat all
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
  libraryFilter: "all", // "all", "playlists", "artists", "albums"
  librarySort: "recents",
  contextMenuTrackId: null,
  isArtistFollowed: false,
  nowPlayingModalOpen: false
};

// ==========================================================================
// 5. DOM ELEMENTS CACHE
// ==========================================================================

const elements = {
  audio: document.getElementById("audioPlayer"),
  contentScroll: document.getElementById("contentScroll"),
  ambientHeaderBg: document.getElementById("ambientHeaderBg"),
  topbar: document.getElementById("topbar"),
  greetingText: document.getElementById("greetingText"),

  // Views
  homeView: document.getElementById("homeView"),
  searchView: document.getElementById("searchView"),
  libraryView: document.getElementById("libraryView"),
  likedView: document.getElementById("likedView"),
  playlistView: document.getElementById("playlistView"),
  lyricsView: document.getElementById("lyricsView"),

  // Primary & Mobile Navigation
  brandLogo: document.getElementById("brandLogo"),
  mobileTopbarBrand: document.getElementById("mobileTopbarBrand"),
  navHomeBtn: document.getElementById("navHomeBtn"),
  navSearchBtn: document.getElementById("navSearchBtn"),
  navLibraryBtn: document.getElementById("navLibraryBtn"),
  mobileBottomNav: document.getElementById("mobileBottomNav"),
  mobileNavHome: document.getElementById("mobileNavHome"),
  mobileNavSearch: document.getElementById("mobileNavSearch"),
  mobileNavLibrary: document.getElementById("mobileNavLibrary"),
  mobileNavProfile: document.getElementById("mobileNavProfile"),
  topbarHomeBtn: document.getElementById("topbarHomeBtn"),
  historyBackBtn: document.getElementById("historyBackBtn"),
  historyForwardBtn: document.getElementById("historyForwardBtn"),

  // Desktop Library Sidebar
  libToggleBtn: document.getElementById("libToggleBtn"),
  createPlaylistBtn: document.getElementById("createPlaylistBtn"),
  libLikedSongs: document.getElementById("libLikedSongs"),
  libLikedCount: document.getElementById("libLikedCount"),
  customPlaylistsList: document.getElementById("customPlaylistsList"),
  chipLibPlaylists: document.getElementById("chipLibPlaylists"),
  chipLibArtists: document.getElementById("chipLibArtists"),
  chipLibAlbums: document.getElementById("chipLibAlbums"),
  libSearchToggle: document.getElementById("libSearchToggle"),
  libSearchInput: document.getElementById("libSearchInput"),
  libSortBtn: document.getElementById("libSortBtn"),
  currentSortLabel: document.getElementById("currentSortLabel"),
  sortDropdownMenu: document.getElementById("sortDropdownMenu"),

  // Dedicated Library View Elements
  libraryViewContent: document.getElementById("libraryViewContent"),
  libViewCreatePlaylistBtn: document.getElementById("libViewCreatePlaylistBtn"),
  libViewChipAll: document.getElementById("libViewChipAll"),
  libViewChipPlaylists: document.getElementById("libViewChipPlaylists"),
  libViewChipArtists: document.getElementById("libViewChipArtists"),
  libViewChipAlbums: document.getElementById("libViewChipAlbums"),
  libViewSearchToggle: document.getElementById("libViewSearchToggle"),
  libViewSearchInput: document.getElementById("libViewSearchInput"),
  libViewSortBtn: document.getElementById("libViewSortBtn"),
  libViewSortLabel: document.getElementById("libViewSortLabel"),

  // Search Elements
  topbarSearchWrapper: document.getElementById("topbarSearchWrapper"),
  globalSearchInput: document.getElementById("globalSearchInput"),
  searchClearBtn: document.getElementById("searchClearBtn"),
  viewSearchInput: document.getElementById("viewSearchInput"),
  viewSearchClearBtn: document.getElementById("viewSearchClearBtn"),
  searchSuggestionsChips: document.getElementById("searchSuggestionsChips"),
  searchResultsSection: document.getElementById("searchResultsSection"),
  browseCategoriesSection: document.getElementById("browseCategoriesSection"),
  topResultCard: document.getElementById("topResultCard"),
  searchSongsList: document.getElementById("searchSongsList"),
  searchMiniRows: document.getElementById("searchMiniRows"),
  searchArtistsShelf: document.getElementById("searchArtistsShelf"),
  searchArtistsRow: document.getElementById("searchArtistsRow"),
  searchAlbumsShelf: document.getElementById("searchAlbumsShelf"),
  searchAlbumsRow: document.getElementById("searchAlbumsRow"),
  browseGrid: document.getElementById("browseGrid"),
  searchResultsFound: document.getElementById("searchResultsFound"),
  searchNoResults: document.getElementById("searchNoResults"),
  noResultsTitle: document.getElementById("noResultsTitle"),

  // Home Containers
  homeMusicSubcontainer: document.getElementById("homeMusicSubcontainer"),
  homePodcastsSubcontainer: document.getElementById("homePodcastsSubcontainer"),
  podcastsCardsRow: document.getElementById("podcastsCardsRow"),
  quickGrid: document.getElementById("quickGrid"),
  madeForYouRow: document.getElementById("madeForYouRow"),
  popularAlbumsRow: document.getElementById("popularAlbumsRow"),
  todaysHitsRow: document.getElementById("todaysHitsRow"),
  recommendedRow: document.getElementById("recommendedRow"),
  homePlaylistsRow: document.getElementById("homePlaylistsRow"),
  artistsRow: document.getElementById("artistsRow"),
  homeTrackRows: document.getElementById("homeTrackRows"),
  playAllHomeBtn: document.getElementById("playAllHomeBtn"),
  homeChipAll: document.getElementById("homeChipAll"),
  homeChipMusic: document.getElementById("homeChipMusic"),
  homeChipPodcasts: document.getElementById("homeChipPodcasts"),
  showAllMadeForYou: document.getElementById("showAllMadeForYou"),
  showAllAlbums: document.getElementById("showAllAlbums"),
  showAllHits: document.getElementById("showAllHits"),
  showAllRecommended: document.getElementById("showAllRecommended"),
  showAllPlaylists: document.getElementById("showAllPlaylists"),
  showAllArtists: document.getElementById("showAllArtists"),

  // Liked Songs Elements
  likedTrackRows: document.getElementById("likedTrackRows"),
  likedHeroCount: document.getElementById("likedHeroCount"),
  likedHeroDuration: document.getElementById("likedHeroDuration"),
  playLikedBtn: document.getElementById("playLikedBtn"),
  shuffleLikedBtn: document.getElementById("shuffleLikedBtn"),
  downloadLikedBtn: document.getElementById("downloadLikedBtn"),

  // Playlist / Album Detail View Elements
  playlistHero: document.getElementById("playlistHero"),
  playlistHeroCover: document.getElementById("playlistHeroCover"),
  playlistHeroType: document.getElementById("playlistHeroType"),
  playlistHeroTitle: document.getElementById("playlistHeroTitle"),
  playlistHeroDesc: document.getElementById("playlistHeroDesc"),
  playlistHeroCreator: document.getElementById("playlistHeroCreator"),
  playlistHeroCount: document.getElementById("playlistHeroCount"),
  playlistHeroDuration: document.getElementById("playlistHeroDuration"),
  playlistTrackRows: document.getElementById("playlistTrackRows"),
  playPlaylistHeroBtn: document.getElementById("playPlaylistHeroBtn"),
  shufflePlaylistHeroBtn: document.getElementById("shufflePlaylistHeroBtn"),
  likePlaylistBtn: document.getElementById("likePlaylistBtn"),
  renamePlaylistHeroBtn: document.getElementById("renamePlaylistHeroBtn"),
  deletePlaylistHeroBtn: document.getElementById("deletePlaylistHeroBtn"),

  // Bottom Elevated Player Dock / Mini-Player
  nowPlayingBar: document.getElementById("nowPlayingBar"),
  miniProgressBar: document.getElementById("miniProgressBar"),
  miniProgressFill: document.getElementById("miniProgressFill"),
  nowPlayingLeft: document.getElementById("nowPlayingLeft"),
  miniArtWrap: document.getElementById("miniArtWrap"),
  nowPlayingArt: document.getElementById("nowPlayingArt"),
  nowPlayingInfo: document.getElementById("nowPlayingInfo"),
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
  volumeBtn: document.getElementById("volumeBtn"),
  volumeIcon: document.getElementById("volumeIcon"),
  volumeSliderContainer: document.getElementById("volumeSliderContainer"),
  volumeSliderFill: document.getElementById("volumeSliderFill"),
  volumeThumb: document.getElementById("volumeThumb"),
  lyricsBtn: document.getElementById("lyricsBtn"),
  queueBtn: document.getElementById("queueBtn"),
  deviceBtn: document.getElementById("deviceBtn"),
  fullscreenBtn: document.getElementById("fullscreenBtn"),
  nowPlayingViewBtn: document.getElementById("nowPlayingViewBtn"),

  // Full-Screen Now Playing Modal
  nowPlayingModal: document.getElementById("nowPlayingModal"),
  npModalBackdrop: document.getElementById("npModalBackdrop"),
  npCollapseBtn: document.getElementById("npCollapseBtn"),
  npContextTitle: document.getElementById("npContextTitle"),
  npOptionsBtn: document.getElementById("npOptionsBtn"),
  npArtworkCard: document.getElementById("npArtworkCard"),
  npArtworkImg: document.getElementById("npArtworkImg"),
  npTrackName: document.getElementById("npTrackName"),
  npArtistName: document.getElementById("npArtistName"),
  npLikeBtn: document.getElementById("npLikeBtn"),
  npProgressBarContainer: document.getElementById("npProgressBarContainer"),
  npProgressBarFill: document.getElementById("npProgressBarFill"),
  npProgressThumb: document.getElementById("npProgressThumb"),
  npCurrentTime: document.getElementById("npCurrentTime"),
  npTotalDuration: document.getElementById("npTotalDuration"),
  npShuffleBtn: document.getElementById("npShuffleBtn"),
  npPrevBtn: document.getElementById("npPrevBtn"),
  npPlayPauseBtn: document.getElementById("npPlayPauseBtn"),
  npPlayPauseIcon: document.getElementById("npPlayPauseIcon"),
  npNextBtn: document.getElementById("npNextBtn"),
  npRepeatBtn: document.getElementById("npRepeatBtn"),
  npRepeatIcon: document.getElementById("npRepeatIcon"),
  npDeviceBtn: document.getElementById("npDeviceBtn"),
  npLyricsBtn: document.getElementById("npLyricsBtn"),
  npQueueBtn: document.getElementById("npQueueBtn"),
  npVolumeMuteBtn: document.getElementById("npVolumeMuteBtn"),
  npVolumeIcon: document.getElementById("npVolumeIcon"),
  npVolumeSliderContainer: document.getElementById("npVolumeSliderContainer"),
  npVolumeSliderFill: document.getElementById("npVolumeSliderFill"),
  npVolumeThumb: document.getElementById("npVolumeThumb"),

  // Lyrics View Elements
  lyricsSongTitle: document.getElementById("lyricsSongTitle"),
  lyricsArtistName: document.getElementById("lyricsArtistName"),
  closeLyricsBtn: document.getElementById("closeLyricsBtn"),
  lyricsScrollWrapper: document.getElementById("lyricsScrollWrapper"),
  lyricsContainer: document.getElementById("lyricsContainer"),

  // Right Sidebar (Desktop)
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

  // Modals
  trackContextMenu: document.getElementById("trackContextMenu"),
  ctxPlay: document.getElementById("ctxPlay"),
  ctxAddToQueue: document.getElementById("ctxAddToQueue"),
  ctxAddToPlaylist: document.getElementById("ctxAddToPlaylist"),
  ctxRemoveFromPlaylist: document.getElementById("ctxRemoveFromPlaylist"),
  ctxToggleLike: document.getElementById("ctxToggleLike"),
  ctxLikeLabel: document.getElementById("ctxLikeLabel"),
  ctxViewLyrics: document.getElementById("ctxViewLyrics"),
  ctxGoToArtist: document.getElementById("ctxGoToArtist"),
  ctxDownload: document.getElementById("ctxDownload"),
  ctxCopyLink: document.getElementById("ctxCopyLink"),

  createPlaylistModal: document.getElementById("createPlaylistModal"),
  newPlaylistTitleInput: document.getElementById("newPlaylistName"),
  newPlaylistDescInput: document.getElementById("newPlaylistDesc"),
  cancelCreatePlaylist: document.getElementById("cancelCreatePlaylist"),
  saveCreatePlaylist: document.getElementById("saveCreatePlaylist"),
  closeCreatePlaylistModal: document.getElementById("closeCreatePlaylistModal"),

  renamePlaylistModal: document.getElementById("renamePlaylistModal"),
  renamePlaylistName: document.getElementById("renamePlaylistName"),
  renamePlaylistDesc: document.getElementById("renamePlaylistDesc"),
  cancelRenamePlaylist: document.getElementById("cancelRenamePlaylist"),
  saveRenamePlaylist: document.getElementById("saveRenamePlaylist"),
  closeRenamePlaylistModal: document.getElementById("closeRenamePlaylistModal"),

  addToPlaylistModal: document.getElementById("addToPlaylistModal"),
  addToPlaylistSongInfo: document.getElementById("addToPlaylistSongInfo"),
  playlistPickList: document.getElementById("playlistPickList"),
  closeAddToPlaylistModal: document.getElementById("closeAddToPlaylistModal"),

  premiumModal: document.getElementById("premiumModal"),
  topbarExplorePremiumBtn: document.getElementById("premiumBtn"),
  closePremiumModal: document.getElementById("closePremiumModal"),

  installModal: document.getElementById("installModal"),
  topbarInstallBtn: document.getElementById("installBtn"),
  closeInstallModal: document.getElementById("closeInstallModal"),

  devicesModal: document.getElementById("devicesModal"),
  closeDevicesModal: document.getElementById("closeDevicesModal"),

  artZoomModal: document.getElementById("artZoomModal"),
  closeArtZoomModal: document.getElementById("closeArtZoomModal"),
  artZoomImg: document.getElementById("artZoomImg"),
  artZoomTitle: document.getElementById("artZoomTitle"),
  artZoomArtist: document.getElementById("artZoomArtist"),

  profileModal: document.getElementById("profileModal"),
  closeProfileModal: document.getElementById("closeProfileModal"),
  menuProfileBtn: document.getElementById("menuProfileBtn"),
  menuPremiumBtn: document.getElementById("menuPremiumBtn"),
  shortcutsBtn: document.getElementById("shortcutsBtn"),
  shortcutsModal: document.getElementById("shortcutsModal"),
  closeShortcutsModal: document.getElementById("closeShortcutsModal"),

  notificationBtn: document.getElementById("notificationBtn"),
  notificationsFlyout: document.getElementById("notificationsFlyout"),
  userProfileBtn: document.getElementById("userProfileBtn"),
  userDropdown: document.getElementById("userDropdown"),
  toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// 6. LOCAL STORAGE PERSISTENCE
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
  } catch (e) {
    console.warn("Storage load warning:", e);
  }
}

function saveToStorage() {
  try {
    localStorage.setItem("vibez_liked_songs", JSON.stringify([...state.likedSongIds]));
    localStorage.setItem("vibez_user_playlists", JSON.stringify(state.userPlaylists));
  } catch (e) {
    console.warn("Storage save warning:", e);
  }
}

// ==========================================================================
// 7. AUDIO ENGINE & PLAYBACK CONTROLLER
// ==========================================================================

function setTrack(song, autoPlay = true) {
  if (!song) return;
  state.currentTrack = song;
  state.currentIndex = state.currentPlaylist.findIndex(t => t.id === song.id);
  if (state.currentIndex === -1) state.currentIndex = 0;

  // Set Cloudinary Audio Source
  elements.audio.src = song.src;
  elements.audio.load();

  // Update Mini / Bottom Player Bar UI
  elements.nowPlayingTitle.textContent = song.title;
  elements.nowPlayingArtist.textContent = song.artist;
  elements.nowPlayingArt.src = song.cover;
  elements.totalDuration.textContent = song.duration || "3:30";
  elements.currentTime.textContent = "0:00";
  elements.progressBarFill.style.width = "0%";
  elements.progressThumb.style.left = "0%";
  if (elements.miniProgressFill) elements.miniProgressFill.style.width = "0%";

  // Update Full-Screen Now Playing Modal UI
  if (elements.npArtworkImg) elements.npArtworkImg.src = song.cover;
  if (elements.npTrackName) elements.npTrackName.textContent = song.title;
  if (elements.npArtistName) elements.npArtistName.textContent = song.artist;
  if (elements.npTotalDuration) elements.npTotalDuration.textContent = song.duration || "3:30";
  if (elements.npCurrentTime) elements.npCurrentTime.textContent = "0:00";
  if (elements.npProgressBarFill) elements.npProgressBarFill.style.width = "0%";
  if (elements.npProgressThumb) elements.npProgressThumb.style.left = "0%";
  
  // Set context title for Full-screen modal
  if (elements.npContextTitle) {
    let ctx = "Master Hits";
    if (state.currentAlbumName) {
      ctx = state.currentAlbumName;
    } else if (state.currentPlaylistId) {
      const allPl = [...DEFAULT_PLAYLISTS, ...state.userPlaylists];
      const pl = allPl.find(p => p.id === state.currentPlaylistId);
      if (pl) ctx = pl.title;
    }
    elements.npContextTitle.textContent = ctx;
  }

  // Update Right Panel UI
  if (elements.panelAlbumArt) elements.panelAlbumArt.src = song.cover;
  if (elements.panelTrackTitle) elements.panelTrackTitle.textContent = song.title;
  if (elements.panelArtistName) elements.panelArtistName.textContent = song.artist;
  if (elements.artistBioName) elements.artistBioName.textContent = song.artist;
  if (elements.artistBioListeners) elements.artistBioListeners.textContent = `${song.monthlyListeners || '15,200,000'} monthly listeners`;
  if (elements.artistBioText) elements.artistBioText.textContent = song.bio || "Top streaming artist on VIBEZ.";
  if (elements.artistBioCover) elements.artistBioCover.style.backgroundColor = song.color || "#242424";

  // Update Ambient Color Headers
  updateAmbientHeaderColor(song.color || "#2e3856");

  // Update Lyrics View if open
  if (state.activeView === "lyrics") {
    renderLyrics(song);
  }

  // Synchronize Hearts & Table active rows
  updateLikeButtonsState();
  updateActiveRowVisuals();
  updateQueuePanel();

  // MediaSession API integration for OS/Lockscreen controls
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
  const promise = elements.audio.play();
  if (promise !== undefined) {
    promise.then(() => {
      state.isPlaying = true;
      updatePlayPauseIcons(true);
      updateActiveRowVisuals();
    }).catch(err => {
      console.warn("Autoplay prevention or stream loading:", err);
      state.isPlaying = false;
      updatePlayPauseIcons(false);
      updateActiveRowVisuals();
    });
  }
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

  if (state.repeatMode === 1) { // repeat 1 song
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
  const playIcon = `<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"/>`;
  const pauseIcon = `<path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"/>`;
  
  if (elements.playPauseIcon) elements.playPauseIcon.innerHTML = isPlaying ? pauseIcon : playIcon;
  if (elements.npPlayPauseIcon) elements.npPlayPauseIcon.innerHTML = isPlaying ? pauseIcon : playIcon;
  if (elements.playPauseBtn) elements.playPauseBtn.title = isPlaying ? "Pause (Space)" : "Play (Space)";
  if (elements.npPlayPauseBtn) elements.npPlayPauseBtn.title = isPlaying ? "Pause" : "Play";
}

function setupAudioListeners() {
  // Audio timeupdate
  elements.audio.addEventListener("timeupdate", () => {
    const cur = elements.audio.currentTime || 0;
    const dur = elements.audio.duration || 0;

    const formattedCur = formatTime(cur);
    elements.currentTime.textContent = formattedCur;
    if (elements.npCurrentTime) elements.npCurrentTime.textContent = formattedCur;

    if (!isNaN(dur) && dur > 0) {
      const formattedDur = formatTime(dur);
      elements.totalDuration.textContent = formattedDur;
      if (elements.npTotalDuration) elements.npTotalDuration.textContent = formattedDur;

      const pct = (cur / dur) * 100;
      elements.progressBarFill.style.width = `${pct}%`;
      elements.progressThumb.style.left = `${pct}%`;
      if (elements.npProgressBarFill) elements.npProgressBarFill.style.width = `${pct}%`;
      if (elements.npProgressThumb) elements.npProgressThumb.style.left = `${pct}%`;
      if (elements.miniProgressFill) elements.miniProgressFill.style.width = `${pct}%`;
    }

    syncLyricsWithTime(cur);
  });

  elements.audio.addEventListener("loadedmetadata", () => {
    const dur = elements.audio.duration || 0;
    const formatted = formatTime(dur);
    elements.totalDuration.textContent = formatted;
    if (elements.npTotalDuration) elements.npTotalDuration.textContent = formatted;
  });

  elements.audio.addEventListener("ended", () => {
    nextSong();
  });

  elements.audio.addEventListener("error", (e) => {
    console.warn("Audio loading error:", e);
    showToast("Streaming audio track from Cloudinary...");
  });
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// Scrubber Click & Drag Seeking Helper (Mouse & Touch)
function setupScrubber(container, fill, thumb) {
  if (!container) return;
  let isDragging = false;

  function doSeek(clientX) {
    const rect = container.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const dur = elements.audio.duration || 0;
    if (dur > 0) {
      elements.audio.currentTime = pct * dur;
      const pctStr = `${pct * 100}%`;
      if (elements.progressBarFill) elements.progressBarFill.style.width = pctStr;
      if (elements.progressThumb) elements.progressThumb.style.left = pctStr;
      if (elements.npProgressBarFill) elements.npProgressBarFill.style.width = pctStr;
      if (elements.npProgressThumb) elements.npProgressThumb.style.left = pctStr;
      if (elements.miniProgressFill) elements.miniProgressFill.style.width = pctStr;
      syncLyricsWithTime(elements.audio.currentTime, true);
    }
  }

  // Mouse
  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    doSeek(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging) doSeek(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch
  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    if (e.touches.length > 0) doSeek(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (isDragging && e.touches.length > 0) doSeek(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });
}

// Volume Slider Helper (Mouse & Touch)
function setupVolumeSlider(container) {
  if (!container) return;
  let isDragging = false;

  function doVolume(clientX) {
    const rect = container.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const vol = Math.max(0, Math.min(1, clickX / rect.width));
    setVolume(vol);
  }

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    doVolume(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging) doVolume(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    if (e.touches.length > 0) doVolume(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (isDragging && e.touches.length > 0) doVolume(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });
}

function setVolume(vol) {
  state.volume = vol;
  elements.audio.volume = vol;
  const pctStr = `${vol * 100}%`;
  if (elements.volumeSliderFill) elements.volumeSliderFill.style.width = pctStr;
  if (elements.volumeThumb) elements.volumeThumb.style.left = pctStr;
  if (elements.npVolumeSliderFill) elements.npVolumeSliderFill.style.width = pctStr;
  if (elements.npVolumeThumb) elements.npVolumeThumb.style.left = pctStr;
  updateVolumeIcons(vol);
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

function updateVolumeIcons(vol) {
  let svg = "";
  if (vol === 0) {
    svg = `<path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06zM9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H.75A.75.75 0 0 1 0 10.4V5.6a.75.75 0 0 1 .75-.75h1.316l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.25 6.084H1.5v3.832h1.75l5.375 3.104V2.96z"/>`;
  } else if (vol < 0.5) {
    svg = `<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H.75A.75.75 0 0 1 0 10.4V5.6a.75.75 0 0 1 .75-.75h1.316l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.25 6.084H1.5v3.832h1.75l5.375 3.104V2.96zM11.5 5.56a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.88.75.75 0 0 1-1.06-1.06 2 2 0 0 0 0-2.76.75.75 0 0 1 0-1.06z"/>`;
  } else {
    svg = `<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H.75A.75.75 0 0 1 0 10.4V5.6a.75.75 0 0 1 .75-.75h1.316l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.25 6.084H1.5v3.832h1.75l5.375 3.104V2.96zM11.5 5.56a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.88.75.75 0 0 1-1.06-1.06 2 2 0 0 0 0-2.76.75.75 0 0 1 0-1.06zm2.12-2.12a.75.75 0 0 1 1.06 0 6.5 6.5 0 0 1 0 9.12.75.75 0 1 1-1.06-1.06 5 5 0 0 0 0-7 .75.75 0 0 1 0-1.06z"/>`;
  }
  if (elements.volumeIcon) elements.volumeIcon.innerHTML = svg;
  if (elements.npVolumeIcon) elements.npVolumeIcon.innerHTML = svg;
}

// Shuffle & Repeat Modes
function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  if (elements.shuffleBtn) elements.shuffleBtn.classList.toggle("active", state.isShuffle);
  if (elements.npShuffleBtn) elements.npShuffleBtn.classList.toggle("active", state.isShuffle);
  showToast(state.isShuffle ? "Shuffle on" : "Shuffle off");
}

function toggleRepeat() {
  state.repeatMode = (state.repeatMode + 1) % 3;
  const normalSvg = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"/></svg>`;
  const oneSvg = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"/><text x="8" y="9.5" font-size="6.5" font-weight="bold" fill="currentColor" text-anchor="middle">1</text></svg>`;

  if (state.repeatMode === 0) {
    if (elements.repeatBtn) {
      elements.repeatBtn.classList.remove("active");
      elements.repeatBtn.innerHTML = normalSvg;
    }
    if (elements.npRepeatBtn) {
      elements.npRepeatBtn.classList.remove("active");
      elements.npRepeatBtn.innerHTML = normalSvg;
    }
    showToast("Repeat off");
  } else if (state.repeatMode === 1) {
    if (elements.repeatBtn) {
      elements.repeatBtn.classList.add("active");
      elements.repeatBtn.innerHTML = oneSvg;
    }
    if (elements.npRepeatBtn) {
      elements.npRepeatBtn.classList.add("active");
      elements.npRepeatBtn.innerHTML = oneSvg;
    }
    showToast("Repeat one");
  } else {
    if (elements.repeatBtn) {
      elements.repeatBtn.classList.add("active");
      elements.repeatBtn.innerHTML = normalSvg;
    }
    if (elements.npRepeatBtn) {
      elements.npRepeatBtn.classList.add("active");
      elements.npRepeatBtn.innerHTML = normalSvg;
    }
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

  // If in liked view, refresh table
  if (state.activeView === "liked") {
    renderLikedSongsView();
  }
  if (state.activeView === "library") {
    renderLibraryView();
  }
}

function updateLikeButtonsState() {
  const currentId = state.currentTrack ? state.currentTrack.id : null;
  const isLiked = currentId ? state.likedSongIds.has(currentId) : false;

  if (elements.playerLikeBtn) elements.playerLikeBtn.classList.toggle("liked", isLiked);
  if (elements.panelLikeBtn) elements.panelLikeBtn.classList.toggle("liked", isLiked);
  if (elements.npLikeBtn) elements.npLikeBtn.classList.toggle("liked", isLiked);

  // Update rows hearts
  document.querySelectorAll(".row-heart-btn").forEach(btn => {
    const tId = parseInt(btn.dataset.trackId);
    if (tId) {
      const liked = state.likedSongIds.has(tId);
      btn.classList.toggle("liked", liked);
      btn.title = liked ? "Remove from Liked Songs" : "Save to Liked Songs";
    }
  });
}

function updateActiveRowVisuals() {
  const curId = state.currentTrack ? state.currentTrack.id : null;
  document.querySelectorAll(".track-row").forEach(row => {
    const tId = parseInt(row.dataset.trackId);
    const isActive = tId === curId;
    row.classList.toggle("active", isActive);
    row.classList.toggle("playing", isActive && state.isPlaying);
  });
}

function downloadSongMP3(song) {
  showToast(`Preparing download: ${song.title}...`);
  const a = document.createElement("a");
  a.href = song.src;
  a.download = `${song.artist} - ${song.title}.mp3`;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ==========================================================================
// 8. FULLSCREEN SYNCHRONIZED KARAOKE LYRICS
// ==========================================================================

function renderLyrics(song) {
  if (!song) return;
  elements.lyricsSongTitle.textContent = song.title;
  elements.lyricsArtistName.textContent = song.artist;

  if (!song.lyrics || song.lyrics.length === 0) {
    elements.lyricsContainer.innerHTML = `
      <div style="text-align:center;padding:80px 20px;color:var(--text-subdued);">
        <h2>♪ Instrumental & Melodic Composition ♪</h2>
        <p style="margin-top:12px;">Enjoy the master arrangement by ${escapeHtml(song.artist)}.</p>
      </div>
    `;
    return;
  }

  elements.lyricsContainer.innerHTML = song.lyrics.map((line, idx) => `
    <div class="lyric-line" data-line-index="${idx}" data-time="${line.time}">
      ${escapeHtml(line.text)}
    </div>
  `).join("");

  // Clicking any line jumps playback time
  elements.lyricsContainer.querySelectorAll(".lyric-line").forEach(lineEl => {
    lineEl.addEventListener("click", () => {
      const t = parseFloat(lineEl.dataset.time);
      if (!isNaN(t)) {
        elements.audio.currentTime = t;
        syncLyricsWithTime(t, true);
        playAudio();
      }
    });
  });
}

function syncLyricsWithTime(currentTime, forceScroll = false) {
  if (state.activeView !== "lyrics" || !state.currentTrack || !state.currentTrack.lyrics) return;
  const lyrics = state.currentTrack.lyrics;
  let activeIdx = -1;

  for (let i = 0; i < lyrics.length; i++) {
    if (currentTime >= lyrics[i].time) {
      activeIdx = i;
    } else {
      break;
    }
  }

  if (activeIdx !== state.activeLyricIndex || forceScroll) {
    state.activeLyricIndex = activeIdx;
    const lines = elements.lyricsContainer.querySelectorAll(".lyric-line");
    lines.forEach((el, idx) => {
      if (idx === activeIdx) {
        el.classList.add("active");
        el.classList.remove("past");
        const containerRect = elements.lyricsScrollWrapper.getBoundingClientRect();
        const lineRect = el.getBoundingClientRect();
        const offset = lineRect.top - containerRect.top - (containerRect.height / 2) + (lineRect.height / 2);
        elements.lyricsScrollWrapper.scrollBy({
          top: offset,
          behavior: forceScroll ? "auto" : "smooth"
        });
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
// 9. VIEWS ROUTER & PAGE RENDERING
// ==========================================================================

function navigateTo(viewName, param = null) {
  if (state.activeView !== viewName) {
    state.previousView = state.activeView;
    state.viewHistory.push(viewName);
    state.historyPointer = state.viewHistory.length - 1;
    if (elements.historyBackBtn) elements.historyBackBtn.disabled = false;
  }

  state.activeView = viewName;

  // Toggle view section containers
  document.querySelectorAll(".view-section").forEach(view => {
    view.classList.remove("active");
  });

  // Update navigation items active state (Desktop + Mobile)
  if (elements.navHomeBtn) elements.navHomeBtn.classList.toggle("active", viewName === "home");
  if (elements.navSearchBtn) elements.navSearchBtn.classList.toggle("active", viewName === "search");
  if (elements.navLibraryBtn) elements.navLibraryBtn.classList.toggle("active", viewName === "library");
  if (elements.libLikedSongs) elements.libLikedSongs.classList.toggle("active", viewName === "liked");
  if (elements.lyricsBtn) elements.lyricsBtn.classList.toggle("active", viewName === "lyrics");

  if (elements.mobileNavHome) elements.mobileNavHome.classList.toggle("active", viewName === "home");
  if (elements.mobileNavSearch) elements.mobileNavSearch.classList.toggle("active", viewName === "search");
  if (elements.mobileNavLibrary) elements.mobileNavLibrary.classList.toggle("active", viewName === "library");

  // Reset scroll to top
  if (elements.contentScroll) elements.contentScroll.scrollTop = 0;

  if (viewName === "home") {
    elements.homeView.classList.add("active");
  } else if (viewName === "search") {
    elements.searchView.classList.add("active");
    if (param) {
      if (elements.globalSearchInput) elements.globalSearchInput.value = param;
      if (elements.viewSearchInput) elements.viewSearchInput.value = param;
      handleLiveSearch(param);
    } else {
      setTimeout(() => {
        if (elements.viewSearchInput && window.innerWidth <= 768) {
          elements.viewSearchInput.focus();
        } else if (elements.globalSearchInput) {
          elements.globalSearchInput.focus();
        }
      }, 50);
    }
  } else if (viewName === "library") {
    elements.libraryView.classList.add("active");
    renderLibraryView();
  } else if (viewName === "liked") {
    elements.likedView.classList.add("active");
    renderLikedSongsView();
  } else if (viewName === "playlist") {
    elements.playlistView.classList.add("active");
    renderPlaylistDetailView(param);
  } else if (viewName === "album") {
    elements.playlistView.classList.add("active");
    renderAlbumDetailView(param);
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
    if (elements.historyForwardBtn) elements.historyForwardBtn.disabled = false;
    if (state.historyPointer === 0 && elements.historyBackBtn) elements.historyBackBtn.disabled = true;
  }
}

function handleHistoryForward() {
  if (state.historyPointer < state.viewHistory.length - 1) {
    state.historyPointer++;
    const view = state.viewHistory[state.historyPointer];
    navigateTo(view);
    if (elements.historyBackBtn) elements.historyBackBtn.disabled = false;
    if (state.historyPointer === state.viewHistory.length - 1 && elements.historyForwardBtn) {
      elements.historyForwardBtn.disabled = true;
    }
  }
}

// Render Sidebar Library (Desktop)
function renderSidebarLibrary() {
  const filter = state.libraryFilter;
  let itemsHtml = "";

  if (filter === "all" || filter === "playlists") {
    const allPlaylists = [...DEFAULT_PLAYLISTS, ...state.userPlaylists];
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

  if (elements.customPlaylistsList) {
    elements.customPlaylistsList.innerHTML = itemsHtml;
    elements.customPlaylistsList.querySelectorAll(".lib-item").forEach(item => {
      item.addEventListener("click", () => {
        if (item.dataset.playlistId) {
          navigateTo("playlist", item.dataset.playlistId);
        } else if (item.dataset.artistName) {
          navigateTo("search", item.dataset.artistName);
        } else if (item.dataset.albumName) {
          navigateTo("album", item.dataset.albumName);
        }
      });
    });
  }
}

function updateLikedBadge() {
  const count = state.likedSongIds.size;
  if (elements.libLikedCount) elements.libLikedCount.textContent = `${count} songs`;
  const statLiked = document.getElementById("statLikedCount");
  if (statLiked) statLiked.textContent = count;
  const statPlaylists = document.getElementById("statPlaylistsCount");
  if (statPlaylists) statPlaylists.textContent = 5 + state.userPlaylists.length;
}

// Render Dedicated Your Library View (`#libraryView`)
function renderLibraryView() {
  if (!elements.libraryViewContent) return;
  const filter = state.libraryFilter;
  let cardsHtml = "";

  // Always show Liked Songs Pinned Card if filter is "all" or "playlists"
  if (filter === "all" || filter === "playlists") {
    const likedCount = state.likedSongIds.size;
    cardsHtml += `
      <div class="music-card" id="libViewLikedCard" style="background: linear-gradient(135deg, #450af5, #8e8ee5); cursor: pointer;">
        <div class="card-img-wrap" style="background: transparent; box-shadow: none; display: flex; align-items: center; justify-content: center;">
          <svg viewBox="0 0 16 16" width="56" height="56" fill="#ffffff"><path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-3.62-1.13 4.315 4.315 0 0 0-3.533 3.406c-.363 2.584.57 5.107 2.406 6.911l5.443 5.347a.75.75 0 0 0 1.05 0l5.443-5.347c1.836-1.804 2.77-4.327 2.407-6.911z"/></svg>
        </div>
        <h4 class="card-title">Liked Songs</h4>
        <p class="card-desc" style="color: #ffffff; opacity: 0.85;">${likedCount} liked songs</p>
      </div>
    `;

    // User Playlists + Curated
    const allPlaylists = [...state.userPlaylists, ...DEFAULT_PLAYLISTS];
    if (state.librarySort === "alpha") {
      allPlaylists.sort((a, b) => a.title.localeCompare(b.title));
    }

    cardsHtml += allPlaylists.map(pl => {
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
          <p class="card-desc">Playlist • ${pl.tracks ? pl.tracks.length : 0} songs</p>
        </div>
      `;
    }).join("");
  }

  if (filter === "artists" || filter === "all") {
    const artists = [...new Set(TRACKS_DATA.map(t => t.artist))];
    if (state.librarySort === "alpha") artists.sort();

    cardsHtml += artists.map(artName => {
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
  }

  if (filter === "albums" || filter === "all") {
    POPULAR_ALBUMS.forEach(alb => {
      const s = TRACKS_DATA.find(t => t.album.toLowerCase().includes(alb.album.toLowerCase()) || (alb.tracks && alb.tracks.includes(t.id))) || TRACKS_DATA[0];
      cardsHtml += `
        <div class="music-card" data-album-name="${escapeHtml(alb.album)}">
          <div class="card-img-wrap">
            <img src="${s.cover}" alt="${escapeHtml(alb.album)}">
            <button class="card-play-btn" title="Play ${escapeHtml(alb.album)}">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
            </button>
          </div>
          <h4 class="card-title">${escapeHtml(alb.album)}</h4>
          <p class="card-desc">Album • ${escapeHtml(alb.artist)}</p>
        </div>
      `;
    });
  }

  elements.libraryViewContent.innerHTML = cardsHtml;

  // Add click handlers
  const likedCard = document.getElementById("libViewLikedCard");
  if (likedCard) {
    likedCard.addEventListener("click", () => navigateTo("liked"));
  }

  elements.libraryViewContent.querySelectorAll(".music-card[data-playlist-id]").forEach(c => {
    c.addEventListener("click", (e) => {
      const plId = c.dataset.playlistId;
      if (e.target.closest(".card-play-btn")) {
        playPlaylistById(plId);
      } else {
        navigateTo("playlist", plId);
      }
    });
  });

  elements.libraryViewContent.querySelectorAll(".music-card[data-artist-name]").forEach(c => {
    c.addEventListener("click", () => {
      navigateTo("search", c.dataset.artistName);
    });
  });

  elements.libraryViewContent.querySelectorAll(".music-card[data-album-name]").forEach(c => {
    c.addEventListener("click", (e) => {
      const albName = c.dataset.albumName;
      if (e.target.closest(".card-play-btn")) {
        playAlbumByName(albName);
      } else {
        navigateTo("album", albName);
      }
    });
  });
}

// Render Track Rows for Tables
function renderTrackRows(container, tracksList, contextPlaylist = null) {
  if (!container) return;
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
            <svg viewBox="0 0 16 16" width="16" height="16" class="heart-icon"><path fill="currentColor" d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.75 4.6 4.6 0 0 1 16 5.347c0 3.238-2.923 6.08-7.53 10.203a.75.75 0 0 1-.94 0C2.923 11.427 0 8.585 0 5.347 0 3.233 1.488 1.488 3.69 1.25z"/></svg>
          </button>
          <span>${song.duration || '3:30'}</span>
          <button class="row-more-btn" data-track-id="${song.id}" title="More options">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Attach event handlers to track rows
  container.querySelectorAll(".track-row").forEach(row => {
    const tId = parseInt(row.dataset.trackId);
    row.addEventListener("click", (e) => {
      if (e.target.closest(".row-heart-btn")) {
        e.stopPropagation();
        toggleLikeTrack(tId);
        return;
      }
      if (e.target.closest(".row-more-btn")) {
        e.stopPropagation();
        openTrackContextMenu(e, tId);
        return;
      }
      // Play row
      playSongById(tId, contextPlaylist || tracksList);
    });

    // Right click context menu
    row.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      openTrackContextMenu(e, tId);
    });
  });
}

// Render Liked Songs View
function renderLikedSongsView() {
  const likedSongs = TRACKS_DATA.filter(t => state.likedSongIds.has(t.id));
  elements.likedHeroCount.textContent = `${likedSongs.length} songs`;

  // Calculate total duration
  let totalSec = 0;
  likedSongs.forEach(s => {
    const parts = (s.duration || "3:30").split(":");
    totalSec += parseInt(parts[0]) * 60 + parseInt(parts[1]);
  });
  const mins = Math.round(totalSec / 60);
  elements.likedHeroDuration.textContent = `${mins} min`;

  renderTrackRows(elements.likedTrackRows, likedSongs, likedSongs);

  elements.playLikedBtn.onclick = () => {
    if (likedSongs.length > 0) {
      playSongById(likedSongs[0].id, likedSongs);
    } else {
      showToast("No liked songs yet!");
    }
  };

  elements.shuffleLikedBtn.onclick = () => {
    if (likedSongs.length > 0) {
      state.isShuffle = true;
      if (elements.shuffleBtn) elements.shuffleBtn.classList.add("active");
      if (elements.npShuffleBtn) elements.npShuffleBtn.classList.add("active");
      const randIdx = Math.floor(Math.random() * likedSongs.length);
      playSongById(likedSongs[randIdx].id, likedSongs);
    }
  };
}

// Render Playlist Detail View
function renderPlaylistDetailView(playlistId) {
  state.currentPlaylistId = playlistId;
  state.currentAlbumName = null;
  const allPlaylists = [...DEFAULT_PLAYLISTS, ...state.userPlaylists];
  const pl = allPlaylists.find(p => p.id === playlistId) || DEFAULT_PLAYLISTS[0];
  const isUserPlaylist = state.userPlaylists.some(p => p.id === pl.id);

  const playlistSongs = TRACKS_DATA.filter(t => pl.tracks && pl.tracks.includes(t.id));
  state.currentPlaylist = playlistSongs;

  if (elements.playlistHeroType) elements.playlistHeroType.textContent = "Playlist";
  elements.playlistHeroTitle.textContent = pl.title;
  elements.playlistHeroDesc.textContent = pl.desc || (isUserPlaylist ? "Created by you" : "Curated by VIBEZ Editors");
  if (elements.playlistHeroCreator) elements.playlistHeroCreator.textContent = isUserPlaylist ? "You" : "VIBEZ";
  elements.playlistHeroCount.textContent = `${playlistSongs.length} songs`;

  // Cover
  const firstSong = playlistSongs[0] || TRACKS_DATA[0];
  elements.playlistHeroCover.innerHTML = `<img src="${firstSong.cover}" alt="${escapeHtml(pl.title)}">`;

  // Duration
  let totalSec = 0;
  playlistSongs.forEach(s => {
    const parts = (s.duration || "3:30").split(":");
    totalSec += parseInt(parts[0]) * 60 + parseInt(parts[1]);
  });
  const mins = Math.round(totalSec / 60);
  elements.playlistHeroDuration.textContent = `${mins} min`;

  // Show/Hide Rename and Delete buttons for user playlists
  if (elements.renamePlaylistHeroBtn) {
    elements.renamePlaylistHeroBtn.style.display = isUserPlaylist ? "inline-flex" : "none";
    elements.renamePlaylistHeroBtn.onclick = () => openRenamePlaylistModal(pl.id);
  }
  if (elements.deletePlaylistHeroBtn) {
    elements.deletePlaylistHeroBtn.style.display = isUserPlaylist ? "inline-flex" : "none";
    elements.deletePlaylistHeroBtn.onclick = () => deletePlaylist(pl.id);
  }

  // Play button
  elements.playPlaylistHeroBtn.onclick = () => {
    if (playlistSongs.length > 0) {
      playSongById(playlistSongs[0].id, playlistSongs);
    } else {
      showToast("This playlist is empty. Add songs from track context menus!");
    }
  };

  // Shuffle button
  elements.shufflePlaylistHeroBtn.onclick = () => {
    if (playlistSongs.length > 0) {
      state.isShuffle = true;
      if (elements.shuffleBtn) elements.shuffleBtn.classList.add("active");
      if (elements.npShuffleBtn) elements.npShuffleBtn.classList.add("active");
      const randIdx = Math.floor(Math.random() * playlistSongs.length);
      playSongById(playlistSongs[randIdx].id, playlistSongs);
    }
  };

  renderTrackRows(elements.playlistTrackRows, playlistSongs, playlistSongs);
}

// Render Album Detail View
function renderAlbumDetailView(albumName) {
  state.currentAlbumName = albumName;
  state.currentPlaylistId = null;

  // Filter songs by album
  const albumSongs = TRACKS_DATA.filter(t => t.album.toLowerCase() === albumName.toLowerCase() || t.album.toLowerCase().includes(albumName.toLowerCase()));
  const firstSong = albumSongs[0] || TRACKS_DATA[0];
  state.currentPlaylist = albumSongs.length > 0 ? albumSongs : [firstSong];

  if (elements.playlistHeroType) elements.playlistHeroType.textContent = "Album";
  elements.playlistHeroTitle.textContent = albumName;
  elements.playlistHeroDesc.textContent = `Album by ${firstSong.artist} • High Fidelity Streaming`;
  if (elements.playlistHeroCreator) elements.playlistHeroCreator.textContent = firstSong.artist;
  elements.playlistHeroCount.textContent = `${albumSongs.length} songs`;

  elements.playlistHeroCover.innerHTML = `<img src="${firstSong.cover}" alt="${escapeHtml(albumName)}">`;

  let totalSec = 0;
  albumSongs.forEach(s => {
    const parts = (s.duration || "3:30").split(":");
    totalSec += parseInt(parts[0]) * 60 + parseInt(parts[1]);
  });
  const mins = Math.round(totalSec / 60);
  elements.playlistHeroDuration.textContent = `${mins} min`;

  if (elements.renamePlaylistHeroBtn) elements.renamePlaylistHeroBtn.style.display = "none";
  if (elements.deletePlaylistHeroBtn) elements.deletePlaylistHeroBtn.style.display = "none";

  elements.playPlaylistHeroBtn.onclick = () => {
    if (albumSongs.length > 0) {
      playSongById(albumSongs[0].id, albumSongs);
    }
  };

  elements.shufflePlaylistHeroBtn.onclick = () => {
    if (albumSongs.length > 0) {
      state.isShuffle = true;
      if (elements.shuffleBtn) elements.shuffleBtn.classList.add("active");
      if (elements.npShuffleBtn) elements.npShuffleBtn.classList.add("active");
      const randIdx = Math.floor(Math.random() * albumSongs.length);
      playSongById(albumSongs[randIdx].id, albumSongs);
    }
  };

  renderTrackRows(elements.playlistTrackRows, albumSongs, albumSongs);
}

function playPlaylistById(plId) {
  const allPlaylists = [...DEFAULT_PLAYLISTS, ...state.userPlaylists];
  const pl = allPlaylists.find(p => p.id === plId);
  if (pl && pl.tracks && pl.tracks.length > 0) {
    const list = TRACKS_DATA.filter(t => pl.tracks.includes(t.id));
    if (list.length > 0) playSongById(list[0].id, list);
  }
}

function playAlbumByName(albumName) {
  const albumSongs = TRACKS_DATA.filter(t => t.album.toLowerCase() === albumName.toLowerCase() || t.album.toLowerCase().includes(albumName.toLowerCase()));
  if (albumSongs.length > 0) {
    playSongById(albumSongs[0].id, albumSongs);
  }
}

// Render Browse Genres for Search View
function renderBrowseGenres() {
  if (!elements.browseGrid) return;
  elements.browseGrid.innerHTML = BROWSE_GENRES.map(g => {
    const s = TRACKS_DATA.find(t => t.id === g.track) || TRACKS_DATA[0];
    return `
      <div class="genre-card" style="background-color: ${g.color};" data-genre="${escapeHtml(g.name)}" data-track-id="${g.track}">
        <span>${escapeHtml(g.name)}</span>
        <img class="genre-card-art" src="${s.cover}" alt="${escapeHtml(g.name)}">
      </div>
    `;
  }).join("");

  elements.browseGrid.querySelectorAll(".genre-card").forEach(c => {
    c.addEventListener("click", () => {
      const gName = c.dataset.genre;
      if (elements.globalSearchInput) elements.globalSearchInput.value = gName;
      if (elements.viewSearchInput) elements.viewSearchInput.value = gName;
      handleLiveSearch(gName);
    });
  });
}

// Live Search Engine: title, artist, album
function handleLiveSearch(query) {
  const q = (query || "").trim().toLowerCase();

  // Keep both inputs in sync
  if (elements.globalSearchInput && elements.globalSearchInput.value !== query) {
    elements.globalSearchInput.value = query;
  }
  if (elements.viewSearchInput && elements.viewSearchInput.value !== query) {
    elements.viewSearchInput.value = query;
  }

  if (elements.searchClearBtn) elements.searchClearBtn.style.display = q ? "inline-flex" : "none";
  if (elements.viewSearchClearBtn) elements.viewSearchClearBtn.style.display = q ? "inline-flex" : "none";

  if (!q) {
    elements.searchResultsSection.style.display = "none";
    elements.browseCategoriesSection.style.display = "block";
    return;
  }

  elements.searchResultsSection.style.display = "block";
  elements.browseCategoriesSection.style.display = "none";

  // Match title, artist, or album
  const matchedSongs = TRACKS_DATA.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.artist.toLowerCase().includes(q) ||
    t.album.toLowerCase().includes(q)
  );

  const matchedArtists = [...new Set(matchedSongs.map(s => s.artist))];
  const matchedAlbums = [...new Set(matchedSongs.map(s => s.album))];

  if (matchedSongs.length === 0) {
    elements.searchResultsFound.style.display = "none";
    elements.searchNoResults.style.display = "block";
    if (elements.noResultsTitle) elements.noResultsTitle.textContent = `No results found for "${query}"`;
    return;
  }

  elements.searchResultsFound.style.display = "block";
  elements.searchNoResults.style.display = "none";

  // Top Result Card
  const topSong = matchedSongs[0];
  elements.topResultCard.innerHTML = `
    <div class="top-res-art">
      <img src="${topSong.cover}" alt="${escapeHtml(topSong.title)}">
    </div>
    <h2 class="top-res-title">${escapeHtml(topSong.title)}</h2>
    <div class="top-res-meta">
      <span class="top-res-badge">Song</span>
      <span>${escapeHtml(topSong.artist)}</span>
      <span class="bullet">•</span>
      <span>${escapeHtml(topSong.album)}</span>
    </div>
    <button class="card-play-btn" title="Play">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
    </button>
  `;

  elements.topResultCard.onclick = () => {
    playSongById(topSong.id, matchedSongs);
  };

  // Mini Songs List (Top 4)
  elements.searchMiniRows.innerHTML = matchedSongs.slice(0, 4).map(song => `
    <div class="search-mini-row" data-track-id="${song.id}">
      <div class="search-mini-left">
        <div class="search-mini-thumb">
          <img src="${song.cover}" alt="${escapeHtml(song.title)}">
        </div>
        <div class="search-mini-meta">
          <span class="search-mini-title">${escapeHtml(song.title)}</span>
          <span class="search-mini-artist">${escapeHtml(song.artist)}</span>
        </div>
      </div>
      <span style="font-size:12px;color:var(--text-subdued);">${song.duration || '3:30'}</span>
    </div>
  `).join("");

  elements.searchMiniRows.querySelectorAll(".search-mini-row").forEach(row => {
    row.onclick = () => {
      const tId = parseInt(row.dataset.trackId);
      playSongById(tId, matchedSongs);
    };
  });

  // Matching Artists Shelf
  if (matchedArtists.length > 0) {
    elements.searchArtistsShelf.style.display = "block";
    elements.searchArtistsRow.innerHTML = matchedArtists.slice(0, 6).map(artName => {
      const s = TRACKS_DATA.find(t => t.artist === artName);
      return `
        <div class="music-card card-artist" data-artist-name="${escapeHtml(artName)}">
          <div class="card-img-wrap">
            <img src="${s ? s.cover : ''}" alt="${escapeHtml(artName)}">
            <button class="card-play-btn" title="Play">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
            </button>
          </div>
          <h4 class="card-title">${escapeHtml(artName)}</h4>
          <p class="card-desc">Artist</p>
        </div>
      `;
    }).join("");

    elements.searchArtistsRow.querySelectorAll(".music-card").forEach(c => {
      c.onclick = () => {
        handleLiveSearch(c.dataset.artistName);
      };
    });
  } else {
    elements.searchArtistsShelf.style.display = "none";
  }

  // Matching Albums Shelf
  if (elements.searchAlbumsShelf && matchedAlbums.length > 0) {
    elements.searchAlbumsShelf.style.display = "block";
    elements.searchAlbumsRow.innerHTML = matchedAlbums.slice(0, 6).map(albName => {
      const s = TRACKS_DATA.find(t => t.album === albName);
      return `
        <div class="music-card" data-album-name="${escapeHtml(albName)}">
          <div class="card-img-wrap">
            <img src="${s ? s.cover : ''}" alt="${escapeHtml(albName)}">
            <button class="card-play-btn" title="Play">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
            </button>
          </div>
          <h4 class="card-title">${escapeHtml(albName)}</h4>
          <p class="card-desc">Album • ${s ? escapeHtml(s.artist) : ''}</p>
        </div>
      `;
    }).join("");

    elements.searchAlbumsRow.querySelectorAll(".music-card").forEach(c => {
      c.onclick = () => {
        navigateTo("album", c.dataset.albumName);
      };
    });
  } else if (elements.searchAlbumsShelf) {
    elements.searchAlbumsShelf.style.display = "none";
  }
}

// Queue Panel update
function updateQueuePanel() {
  if (!elements.queueNowPlayingItem) return;

  if (state.currentTrack) {
    elements.queueNowPlayingItem.innerHTML = `
      <div class="search-mini-row" style="background: rgba(255,255,255,0.08); border-radius:4px; margin-top:8px;">
        <div class="search-mini-left">
          <div class="search-mini-thumb">
            <img src="${state.currentTrack.cover}" alt="${escapeHtml(state.currentTrack.title)}">
          </div>
          <div class="search-mini-meta">
            <span class="search-mini-title" style="color:var(--vibez-green);">${escapeHtml(state.currentTrack.title)}</span>
            <span class="search-mini-artist">${escapeHtml(state.currentTrack.artist)}</span>
          </div>
        </div>
      </div>
    `;
  }

  // Next in queue on Now Playing View subpanel
  if (elements.nextQueueItem) {
    const nextSongObj = state.upcomingQueue.length > 0
      ? state.upcomingQueue[0]
      : state.currentPlaylist[(state.currentIndex + 1) % state.currentPlaylist.length];
    
    if (nextSongObj) {
      elements.nextQueueItem.innerHTML = `
        <div class="search-mini-row" style="padding:4px 0;">
          <div class="search-mini-left">
            <div class="search-mini-thumb" style="width:36px;height:36px;">
              <img src="${nextSongObj.cover}" alt="${escapeHtml(nextSongObj.title)}">
            </div>
            <div class="search-mini-meta">
              <span class="search-mini-title" style="font-size:13px;">${escapeHtml(nextSongObj.title)}</span>
              <span class="search-mini-artist" style="font-size:11px;">${escapeHtml(nextSongObj.artist)}</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Upcoming Queue list
  if (elements.queueUpcomingList) {
    let upcoming = [...state.upcomingQueue];
    if (upcoming.length === 0) {
      // Default to playlist order
      for (let i = 1; i <= 6; i++) {
        const idx = (state.currentIndex + i) % state.currentPlaylist.length;
        upcoming.push(state.currentPlaylist[idx]);
      }
    }

    elements.queueUpcomingList.innerHTML = upcoming.map((song, i) => `
      <div class="search-mini-row" data-queue-idx="${i}">
        <div class="search-mini-left">
          <span style="font-size:12px;color:var(--text-subdued);width:16px;">${i + 1}</span>
          <div class="search-mini-thumb" style="width:36px;height:36px;">
            <img src="${song.cover}" alt="${escapeHtml(song.title)}">
          </div>
          <div class="search-mini-meta">
            <span class="search-mini-title" style="font-size:13px;">${escapeHtml(song.title)}</span>
            <span class="search-mini-artist" style="font-size:11px;">${escapeHtml(song.artist)}</span>
          </div>
        </div>
      </div>
    `).join("");
  }
}

function toggleRightSidebar(subpanel = "now-playing") {
  if (window.innerWidth <= 768) {
    // On mobile, queue or lyrics can open their full views
    if (subpanel === "now-playing") {
      openNowPlayingModal();
    } else {
      showToast("Queue active in player");
    }
    return;
  }

  state.rightSidebarSubpanel = subpanel;
  if (!state.rightSidebarOpen) {
    state.rightSidebarOpen = true;
    elements.rightSidebar.classList.add("open");
  } else if (subpanel === "queue" && elements.queueViewSubpanel.style.display !== "none") {
    // toggle close
    state.rightSidebarOpen = false;
    elements.rightSidebar.classList.remove("open");
    return;
  }

  if (subpanel === "now-playing") {
    elements.rightPanelTitle.textContent = "Now Playing";
    elements.nowPlayingViewSubpanel.style.display = "block";
    elements.queueViewSubpanel.style.display = "none";
    if (elements.nowPlayingViewBtn) elements.nowPlayingViewBtn.classList.add("active");
    if (elements.queueBtn) elements.queueBtn.classList.remove("active");
  } else {
    elements.rightPanelTitle.textContent = "Queue";
    elements.nowPlayingViewSubpanel.style.display = "none";
    elements.queueViewSubpanel.style.display = "block";
    if (elements.nowPlayingViewBtn) elements.nowPlayingViewBtn.classList.remove("active");
    if (elements.queueBtn) elements.queueBtn.classList.add("active");
    updateQueuePanel();
  }
}

// Full-Screen Now Playing Modal (Mobile & Expandable)
function openNowPlayingModal() {
  if (!elements.nowPlayingModal) return;
  state.nowPlayingModalOpen = true;
  elements.nowPlayingModal.classList.add("open");
  document.body.style.overflow = "hidden";
  updateLikeButtonsState();
}

function closeNowPlayingModal() {
  if (!elements.nowPlayingModal) return;
  state.nowPlayingModalOpen = false;
  elements.nowPlayingModal.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================================================
// 10. CONTEXT MENU & PLAYLIST MANAGEMENT
// ==========================================================================

function openTrackContextMenu(e, trackId) {
  state.contextMenuTrackId = trackId;
  const song = TRACKS_DATA.find(t => t.id === trackId);
  if (!song) return;

  const isLiked = state.likedSongIds.has(trackId);
  if (elements.ctxLikeLabel) {
    elements.ctxLikeLabel.textContent = isLiked ? "Remove from Liked Songs" : "Save to Liked Songs";
  }

  // Check if viewing user playlist
  const currentPl = state.userPlaylists.find(p => p.id === state.currentPlaylistId);
  if (elements.ctxRemoveFromPlaylist) {
    elements.ctxRemoveFromPlaylist.style.display = (state.activeView === "playlist" && currentPl) ? "flex" : "none";
  }

  elements.trackContextMenu.style.display = "flex";

  // Position
  let x = e.clientX;
  let y = e.clientY;
  const w = 220;
  const h = 280;
  if (x + w > window.innerWidth) x = window.innerWidth - w - 10;
  if (y + h > window.innerHeight) y = window.innerHeight - h - 10;

  elements.trackContextMenu.style.left = `${Math.max(10, x)}px`;
  elements.trackContextMenu.style.top = `${Math.max(10, y)}px`;
}

function closeTrackContextMenu() {
  if (elements.trackContextMenu) elements.trackContextMenu.style.display = "none";
}

function setupContextMenus() {
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#trackContextMenu") && !e.target.closest(".row-more-btn")) {
      closeTrackContextMenu();
    }
  });

  if (elements.ctxPlay) {
    elements.ctxPlay.addEventListener("click", () => {
      if (state.contextMenuTrackId) playSongById(state.contextMenuTrackId);
      closeTrackContextMenu();
    });
  }

  if (elements.ctxAddToQueue) {
    elements.ctxAddToQueue.addEventListener("click", () => {
      const song = TRACKS_DATA.find(t => t.id === state.contextMenuTrackId);
      if (song) {
        state.upcomingQueue.push(song);
        updateQueuePanel();
        showToast(`Added to queue: ${song.title}`);
      }
      closeTrackContextMenu();
    });
  }

  if (elements.ctxAddToPlaylist) {
    elements.ctxAddToPlaylist.addEventListener("click", () => {
      openAddToPlaylistModal(state.contextMenuTrackId);
      closeTrackContextMenu();
    });
  }

  if (elements.ctxRemoveFromPlaylist) {
    elements.ctxRemoveFromPlaylist.addEventListener("click", () => {
      removeSongFromPlaylist(state.contextMenuTrackId, state.currentPlaylistId);
      closeTrackContextMenu();
    });
  }

  if (elements.ctxToggleLike) {
    elements.ctxToggleLike.addEventListener("click", () => {
      if (state.contextMenuTrackId) toggleLikeTrack(state.contextMenuTrackId);
      closeTrackContextMenu();
    });
  }

  if (elements.ctxViewLyrics) {
    elements.ctxViewLyrics.addEventListener("click", () => {
      if (state.contextMenuTrackId) playSongById(state.contextMenuTrackId);
      navigateTo("lyrics");
      closeTrackContextMenu();
    });
  }

  if (elements.ctxGoToArtist) {
    elements.ctxGoToArtist.addEventListener("click", () => {
      const song = TRACKS_DATA.find(t => t.id === state.contextMenuTrackId);
      if (song) navigateTo("search", song.artist);
      closeTrackContextMenu();
    });
  }

  if (elements.ctxDownload) {
    elements.ctxDownload.addEventListener("click", () => {
      const song = TRACKS_DATA.find(t => t.id === state.contextMenuTrackId);
      if (song) downloadSongMP3(song);
      closeTrackContextMenu();
    });
  }

  if (elements.ctxCopyLink) {
    elements.ctxCopyLink.addEventListener("click", () => {
      const song = TRACKS_DATA.find(t => t.id === state.contextMenuTrackId);
      if (song && navigator.clipboard) {
        navigator.clipboard.writeText(song.src).then(() => {
          showToast("Cloudinary audio link copied to clipboard!");
        }).catch(() => {
          showToast("Link: " + song.src);
        });
      }
      closeTrackContextMenu();
    });
  }
}

// User Playlist Management Functions
function openCreatePlaylistModal() {
  openModal(elements.createPlaylistModal);
  if (elements.newPlaylistTitleInput) {
    elements.newPlaylistTitleInput.value = `My Playlist #${state.userPlaylists.length + 1}`;
    elements.newPlaylistTitleInput.focus();
  }
  if (elements.newPlaylistDescInput) elements.newPlaylistDescInput.value = "";
}

function createNewPlaylist(title, desc) {
  const newPl = {
    id: "pl-" + Date.now(),
    title: title || `My Playlist #${state.userPlaylists.length + 1}`,
    desc: desc || "Personal user playlist",
    color: "#1ed760",
    tracks: []
  };
  state.userPlaylists.push(newPl);
  saveToStorage();
  renderSidebarLibrary();
  updateLikedBadge();
  if (state.activeView === "library") renderLibraryView();
  renderHomePlaylistsRow();
  closeModal(elements.createPlaylistModal);
  showToast(`Created playlist: ${newPl.title}`);
  navigateTo("playlist", newPl.id);
}

function openRenamePlaylistModal(playlistId) {
  const pl = state.userPlaylists.find(p => p.id === playlistId);
  if (!pl) return;
  state.editingPlaylistId = playlistId;
  if (elements.renamePlaylistName) elements.renamePlaylistName.value = pl.title;
  if (elements.renamePlaylistDesc) elements.renamePlaylistDesc.value = pl.desc || "";
  openModal(elements.renamePlaylistModal);
}

function saveRenamedPlaylist() {
  const pl = state.userPlaylists.find(p => p.id === state.editingPlaylistId);
  if (!pl) return;
  const newName = (elements.renamePlaylistName.value || "").trim();
  if (newName) pl.title = newName;
  pl.desc = (elements.renamePlaylistDesc.value || "").trim();
  saveToStorage();
  renderSidebarLibrary();
  if (state.activeView === "playlist") renderPlaylistDetailView(pl.id);
  if (state.activeView === "library") renderLibraryView();
  renderHomePlaylistsRow();
  closeModal(elements.renamePlaylistModal);
  showToast(`Renamed playlist to: ${pl.title}`);
}

function deletePlaylist(playlistId) {
  const pl = state.userPlaylists.find(p => p.id === playlistId);
  if (!pl) return;
  if (confirm(`Are you sure you want to delete "${pl.title}"?`)) {
    state.userPlaylists = state.userPlaylists.filter(p => p.id !== playlistId);
    saveToStorage();
    renderSidebarLibrary();
    updateLikedBadge();
    if (state.activeView === "library") renderLibraryView();
    renderHomePlaylistsRow();
    showToast(`Deleted playlist: ${pl.title}`);
    navigateTo("library");
  }
}

function openAddToPlaylistModal(songId) {
  const song = TRACKS_DATA.find(t => t.id === songId);
  if (!song) return;
  state.addingSongId = songId;

  if (elements.addToPlaylistSongInfo) {
    elements.addToPlaylistSongInfo.textContent = `Select a playlist for: ${song.title} - ${song.artist}`;
  }

  if (elements.playlistPickList) {
    if (state.userPlaylists.length === 0) {
      elements.playlistPickList.innerHTML = `
        <div style="text-align:center;padding:24px 0;color:var(--text-subdued);">
          <p>No custom playlists created yet.</p>
          <button class="pill-btn premium-btn" id="createFirstPlBtn" style="margin-top:12px;">Create New Playlist</button>
        </div>
      `;
      const btn = document.getElementById("createFirstPlBtn");
      if (btn) {
        btn.onclick = () => {
          closeModal(elements.addToPlaylistModal);
          openCreatePlaylistModal();
        };
      }
    } else {
      elements.playlistPickList.innerHTML = state.userPlaylists.map(pl => {
        const contains = pl.tracks && pl.tracks.includes(songId);
        return `
          <div class="playlist-pick-item" data-pl-id="${pl.id}">
            <div>
              <strong>${escapeHtml(pl.title)}</strong>
              <div style="font-size:12px;color:var(--text-subdued);">${pl.tracks ? pl.tracks.length : 0} songs</div>
            </div>
            <button class="pill-btn ${contains ? 'cancel-btn' : 'premium-btn'}" style="padding:6px 14px;font-size:12px;">
              ${contains ? 'Added ✓' : 'Add +'}
            </button>
          </div>
        `;
      }).join("");

      elements.playlistPickList.querySelectorAll(".playlist-pick-item").forEach(item => {
        item.onclick = () => {
          const plId = item.dataset.plId;
          addSongToPlaylist(songId, plId);
          closeModal(elements.addToPlaylistModal);
        };
      });
    }
  }

  openModal(elements.addToPlaylistModal);
}

function addSongToPlaylist(songId, playlistId) {
  const pl = state.userPlaylists.find(p => p.id === playlistId);
  const song = TRACKS_DATA.find(t => t.id === songId);
  if (!pl || !song) return;
  if (!pl.tracks) pl.tracks = [];
  if (!pl.tracks.includes(songId)) {
    pl.tracks.push(songId);
    saveToStorage();
    renderSidebarLibrary();
    if (state.activeView === "playlist" && state.currentPlaylistId === playlistId) {
      renderPlaylistDetailView(playlistId);
    }
    showToast(`Added "${song.title}" to ${pl.title}`);
  } else {
    showToast(`Song already in ${pl.title}`);
  }
}

function removeSongFromPlaylist(songId, playlistId) {
  const pl = state.userPlaylists.find(p => p.id === playlistId);
  const song = TRACKS_DATA.find(t => t.id === songId);
  if (!pl) return;
  if (pl.tracks) {
    pl.tracks = pl.tracks.filter(id => id !== songId);
    saveToStorage();
    renderSidebarLibrary();
    if (state.activeView === "playlist") {
      renderPlaylistDetailView(playlistId);
    }
    showToast(`Removed "${song ? song.title : 'song'}" from ${pl.title}`);
  }
}

// Modal Open/Close Utility
function openModal(modalEl) {
  if (modalEl) modalEl.classList.add("open");
}

function closeModal(modalEl) {
  if (modalEl) modalEl.classList.remove("open");
}

// ==========================================================================
// 11. EVENT LISTENERS SETUP
// ==========================================================================

function setupEventListeners() {
  // Navigation Buttons
  if (elements.navHomeBtn) elements.navHomeBtn.addEventListener("click", () => navigateTo("home"));
  if (elements.navSearchBtn) elements.navSearchBtn.addEventListener("click", () => navigateTo("search"));
  if (elements.navLibraryBtn) elements.navLibraryBtn.addEventListener("click", () => navigateTo("library"));
  if (elements.brandLogo) elements.brandLogo.addEventListener("click", () => navigateTo("home"));
  if (elements.mobileTopbarBrand) elements.mobileTopbarBrand.addEventListener("click", () => navigateTo("home"));
  if (elements.topbarHomeBtn) elements.topbarHomeBtn.addEventListener("click", () => navigateTo("home"));

  // Mobile Bottom Nav Items
  if (elements.mobileNavHome) elements.mobileNavHome.addEventListener("click", () => navigateTo("home"));
  if (elements.mobileNavSearch) elements.mobileNavSearch.addEventListener("click", () => navigateTo("search"));
  if (elements.mobileNavLibrary) elements.mobileNavLibrary.addEventListener("click", () => navigateTo("library"));
  if (elements.mobileNavProfile) elements.mobileNavProfile.addEventListener("click", () => openModal(elements.profileModal));

  // History controls
  if (elements.historyBackBtn) elements.historyBackBtn.addEventListener("click", handleHistoryBack);
  if (elements.historyForwardBtn) elements.historyForwardBtn.addEventListener("click", handleHistoryForward);

  // Playback Controls (Bottom Bar)
  if (elements.playPauseBtn) elements.playPauseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePlay();
  });
  if (elements.prevBtn) elements.prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    prevSong();
  });
  if (elements.nextBtn) elements.nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nextSong();
  });
  if (elements.shuffleBtn) elements.shuffleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleShuffle();
  });
  if (elements.repeatBtn) elements.repeatBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleRepeat();
  });
  if (elements.playerLikeBtn) elements.playerLikeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (state.currentTrack) toggleLikeTrack(state.currentTrack.id);
  });
  if (elements.panelLikeBtn) elements.panelLikeBtn.addEventListener("click", () => {
    if (state.currentTrack) toggleLikeTrack(state.currentTrack.id);
  });

  // Mobile Mini-Player Tap opens Full-Screen Now Playing
  if (elements.nowPlayingBar) {
    elements.nowPlayingBar.addEventListener("click", (e) => {
      // If mobile screen and click wasn't directly on a button, expand
      if (window.innerWidth <= 768) {
        if (!e.target.closest("button")) {
          openNowPlayingModal();
        }
      }
    });
  }

  // Full-Screen Now Playing Controls
  if (elements.npCollapseBtn) elements.npCollapseBtn.addEventListener("click", closeNowPlayingModal);
  if (elements.npPlayPauseBtn) elements.npPlayPauseBtn.addEventListener("click", togglePlay);
  if (elements.npPrevBtn) elements.npPrevBtn.addEventListener("click", prevSong);
  if (elements.npNextBtn) elements.npNextBtn.addEventListener("click", nextSong);
  if (elements.npShuffleBtn) elements.npShuffleBtn.addEventListener("click", toggleShuffle);
  if (elements.npRepeatBtn) elements.npRepeatBtn.addEventListener("click", toggleRepeat);
  if (elements.npLikeBtn) elements.npLikeBtn.addEventListener("click", () => {
    if (state.currentTrack) toggleLikeTrack(state.currentTrack.id);
  });
  if (elements.npLyricsBtn) elements.npLyricsBtn.addEventListener("click", () => {
    closeNowPlayingModal();
    navigateTo("lyrics");
  });
  if (elements.npDeviceBtn) elements.npDeviceBtn.addEventListener("click", () => openModal(elements.devicesModal));
  if (elements.npQueueBtn) elements.npQueueBtn.addEventListener("click", () => {
    closeNowPlayingModal();
    toggleRightSidebar("queue");
  });
  if (elements.npVolumeMuteBtn) elements.npVolumeMuteBtn.addEventListener("click", toggleMute);

  // Scrubber & Volume Dragging setup
  setupScrubber(elements.progressBarContainer, elements.progressBarFill, elements.progressThumb);
  setupScrubber(elements.npProgressBarContainer, elements.npProgressBarFill, elements.npProgressThumb);
  setupVolumeSlider(elements.volumeSliderContainer);
  setupVolumeSlider(elements.npVolumeSliderContainer);

  if (elements.volumeBtn) elements.volumeBtn.addEventListener("click", toggleMute);

  // Secondary Player Controls
  if (elements.lyricsBtn) elements.lyricsBtn.addEventListener("click", () => navigateTo("lyrics"));
  if (elements.closeLyricsBtn) elements.closeLyricsBtn.addEventListener("click", () => navigateTo(state.previousView || "home"));
  if (elements.queueBtn) elements.queueBtn.addEventListener("click", () => toggleRightSidebar("queue"));
  if (elements.nowPlayingViewBtn) elements.nowPlayingViewBtn.addEventListener("click", () => toggleRightSidebar("now-playing"));
  if (elements.closeRightSidebarBtn) elements.closeRightSidebarBtn.addEventListener("click", () => toggleRightSidebar("now-playing"));
  if (elements.deviceBtn) elements.deviceBtn.addEventListener("click", () => openModal(elements.devicesModal));
  if (elements.fullscreenBtn) elements.fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // Search input listeners (Desktop & View)
  if (elements.globalSearchInput) {
    elements.globalSearchInput.addEventListener("input", (e) => {
      if (state.activeView !== "search") navigateTo("search");
      handleLiveSearch(e.target.value);
    });
  }
  if (elements.viewSearchInput) {
    elements.viewSearchInput.addEventListener("input", (e) => {
      handleLiveSearch(e.target.value);
    });
  }
  if (elements.searchClearBtn) {
    elements.searchClearBtn.addEventListener("click", () => {
      if (elements.globalSearchInput) elements.globalSearchInput.value = "";
      if (elements.viewSearchInput) elements.viewSearchInput.value = "";
      handleLiveSearch("");
    });
  }
  if (elements.viewSearchClearBtn) {
    elements.viewSearchClearBtn.addEventListener("click", () => {
      if (elements.globalSearchInput) elements.globalSearchInput.value = "";
      if (elements.viewSearchInput) elements.viewSearchInput.value = "";
      handleLiveSearch("");
    });
  }

  // Search suggestions tags
  document.querySelectorAll(".search-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const q = tag.dataset.tag;
      if (elements.globalSearchInput) elements.globalSearchInput.value = q;
      if (elements.viewSearchInput) elements.viewSearchInput.value = q;
      handleLiveSearch(q);
    });
  });

  // Home filter chips (All, Music, Podcasts)
  if (elements.homeChipAll) elements.homeChipAll.addEventListener("click", () => switchHomeFilter("all"));
  if (elements.homeChipMusic) elements.homeChipMusic.addEventListener("click", () => switchHomeFilter("music"));
  if (elements.homeChipPodcasts) elements.homeChipPodcasts.addEventListener("click", () => switchHomeFilter("podcasts"));

  // Library View filter chips
  if (elements.libViewChipAll) elements.libViewChipAll.addEventListener("click", () => switchLibraryFilter("all"));
  if (elements.libViewChipPlaylists) elements.libViewChipPlaylists.addEventListener("click", () => switchLibraryFilter("playlists"));
  if (elements.libViewChipArtists) elements.libViewChipArtists.addEventListener("click", () => switchLibraryFilter("artists"));
  if (elements.libViewChipAlbums) elements.libViewChipAlbums.addEventListener("click", () => switchLibraryFilter("albums"));

  // Sidebar filter chips
  if (elements.chipLibPlaylists) elements.chipLibPlaylists.addEventListener("click", () => switchSidebarFilter("playlists"));
  if (elements.chipLibArtists) elements.chipLibArtists.addEventListener("click", () => switchSidebarFilter("artists"));
  if (elements.chipLibAlbums) elements.chipLibAlbums.addEventListener("click", () => switchSidebarFilter("albums"));

  // Library Sort
  if (elements.libSortBtn) {
    elements.libSortBtn.addEventListener("click", () => {
      elements.sortDropdownMenu.classList.toggle("show");
    });
  }
  document.querySelectorAll(".sort-opt").forEach(opt => {
    opt.addEventListener("click", () => {
      state.librarySort = opt.dataset.sort;
      if (elements.currentSortLabel) elements.currentSortLabel.textContent = opt.textContent;
      if (elements.libViewSortLabel) elements.libViewSortLabel.textContent = opt.textContent;
      elements.sortDropdownMenu.classList.remove("show");
      renderSidebarLibrary();
      if (state.activeView === "library") renderLibraryView();
    });
  });

  // Library Search Toggle
  if (elements.libSearchToggle) {
    elements.libSearchToggle.addEventListener("click", () => {
      const box = elements.libSearchToggle.closest(".lib-search-box");
      if (box) {
        box.classList.toggle("open");
        if (box.classList.contains("open") && elements.libSearchInput) elements.libSearchInput.focus();
      }
    });
  }
  if (elements.libSearchInput) {
    elements.libSearchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll("#libraryList .lib-item:not(.pinned)").forEach(item => {
        const title = item.querySelector(".lib-title").textContent.toLowerCase();
        item.style.display = title.includes(q) ? "flex" : "none";
      });
    });
  }

  // Create Playlist Modals
  if (elements.createPlaylistBtn) elements.createPlaylistBtn.addEventListener("click", openCreatePlaylistModal);
  if (elements.libViewCreatePlaylistBtn) elements.libViewCreatePlaylistBtn.addEventListener("click", openCreatePlaylistModal);
  if (elements.closeCreatePlaylistModal) elements.closeCreatePlaylistModal.addEventListener("click", () => closeModal(elements.createPlaylistModal));
  if (elements.cancelCreatePlaylist) elements.cancelCreatePlaylist.addEventListener("click", () => closeModal(elements.createPlaylistModal));
  if (elements.saveCreatePlaylist) {
    elements.saveCreatePlaylist.addEventListener("click", () => {
      const title = (elements.newPlaylistTitleInput.value || "").trim();
      const desc = (elements.newPlaylistDescInput.value || "").trim();
      createNewPlaylist(title, desc);
    });
  }

  // Rename Playlist Modal
  if (elements.closeRenamePlaylistModal) elements.closeRenamePlaylistModal.addEventListener("click", () => closeModal(elements.renamePlaylistModal));
  if (elements.cancelRenamePlaylist) elements.cancelRenamePlaylist.addEventListener("click", () => closeModal(elements.renamePlaylistModal));
  if (elements.saveRenamePlaylist) elements.saveRenamePlaylist.addEventListener("click", saveRenamedPlaylist);

  // Add to Playlist Modal
  if (elements.closeAddToPlaylistModal) elements.closeAddToPlaylistModal.addEventListener("click", () => closeModal(elements.addToPlaylistModal));

  // Pinned Liked Songs in Sidebar
  if (elements.libLikedSongs) elements.libLikedSongs.addEventListener("click", () => navigateTo("liked"));

  // Modals (Premium, Install, Shortcuts, Profile, ArtZoom)
  if (elements.topbarExplorePremiumBtn) elements.topbarExplorePremiumBtn.addEventListener("click", () => openModal(elements.premiumModal));
  if (elements.closePremiumModal) elements.closePremiumModal.addEventListener("click", () => closeModal(elements.premiumModal));
  if (elements.topbarInstallBtn) elements.topbarInstallBtn.addEventListener("click", () => openModal(elements.installModal));
  if (elements.closeInstallModal) elements.closeInstallModal.addEventListener("click", () => closeModal(elements.installModal));
  if (elements.closeDevicesModal) elements.closeDevicesModal.addEventListener("click", () => closeModal(elements.devicesModal));
  if (elements.shortcutsBtn) {
    elements.shortcutsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      elements.userDropdown.classList.remove("show");
      openModal(elements.shortcutsModal);
    });
  }
  if (elements.closeShortcutsModal) elements.closeShortcutsModal.addEventListener("click", () => closeModal(elements.shortcutsModal));

  if (elements.userProfileBtn) {
    elements.userProfileBtn.addEventListener("click", () => {
      elements.userDropdown.classList.toggle("show");
    });
  }
  if (elements.menuProfileBtn) {
    elements.menuProfileBtn.addEventListener("click", (e) => {
      e.preventDefault();
      elements.userDropdown.classList.remove("show");
      openModal(elements.profileModal);
    });
  }
  if (elements.closeProfileModal) elements.closeProfileModal.addEventListener("click", () => closeModal(elements.profileModal));

  if (elements.notificationBtn) {
    elements.notificationBtn.addEventListener("click", () => {
      elements.notificationsFlyout.classList.toggle("show");
    });
  }

  // Topbar scroll shadow
  if (elements.contentScroll) {
    elements.contentScroll.addEventListener("scroll", () => {
      if (elements.topbar) {
        elements.topbar.classList.toggle("scrolled", elements.contentScroll.scrollTop > 30);
      }
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    } else if (e.key === "n" || e.key === "N" || (e.shiftKey && e.code === "ArrowRight")) {
      e.preventDefault();
      nextSong();
    } else if (e.key === "p" || e.key === "P" || (e.shiftKey && e.code === "ArrowLeft")) {
      e.preventDefault();
      prevSong();
    } else if (e.code === "ArrowRight") {
      e.preventDefault();
      elements.audio.currentTime = Math.min(elements.audio.duration || 0, elements.audio.currentTime + 5);
    } else if (e.code === "ArrowLeft") {
      e.preventDefault();
      elements.audio.currentTime = Math.max(0, elements.audio.currentTime - 5);
    } else if (e.code === "ArrowUp") {
      e.preventDefault();
      setVolume(Math.min(1, state.volume + 0.05));
    } else if (e.code === "ArrowDown") {
      e.preventDefault();
      setVolume(Math.max(0, state.volume - 0.05));
    } else if (e.key === "m" || e.key === "M") {
      e.preventDefault();
      toggleMute();
    } else if (e.key === "l" || e.key === "L") {
      e.preventDefault();
      if (state.currentTrack) toggleLikeTrack(state.currentTrack.id);
    } else if (e.key === "s" || e.key === "S") {
      e.preventDefault();
      toggleShuffle();
    } else if (e.key === "r" || e.key === "R") {
      e.preventDefault();
      toggleRepeat();
    } else if (e.key === "t" || e.key === "T") {
      e.preventDefault();
      navigateTo(state.activeView === "lyrics" ? (state.previousView || "home") : "lyrics");
    } else if (e.key === "q" || e.key === "Q") {
      e.preventDefault();
      toggleRightSidebar("queue");
    } else if (e.key === "/") {
      e.preventDefault();
      if (state.activeView !== "search") navigateTo("search");
      if (elements.viewSearchInput && window.innerWidth <= 768) elements.viewSearchInput.focus();
      else if (elements.globalSearchInput) elements.globalSearchInput.focus();
    } else if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach(m => closeModal(m));
      if (elements.userDropdown) elements.userDropdown.classList.remove("show");
      if (elements.notificationsFlyout) elements.notificationsFlyout.classList.remove("show");
      closeTrackContextMenu();
      closeNowPlayingModal();
    }
  });
}

function switchHomeFilter(filter) {
  state.homeFilter = filter;
  elements.homeChipAll.classList.toggle("active", filter === "all");
  elements.homeChipMusic.classList.toggle("active", filter === "music");
  elements.homeChipPodcasts.classList.toggle("active", filter === "podcasts");

  if (filter === "podcasts") {
    elements.homeMusicSubcontainer.style.display = "none";
    elements.homePodcastsSubcontainer.style.display = "block";
  } else {
    elements.homeMusicSubcontainer.style.display = "block";
    elements.homePodcastsSubcontainer.style.display = "none";
  }
}

function switchLibraryFilter(filter) {
  state.libraryFilter = filter;
  elements.libViewChipAll.classList.toggle("active", filter === "all");
  elements.libViewChipPlaylists.classList.toggle("active", filter === "playlists");
  elements.libViewChipArtists.classList.toggle("active", filter === "artists");
  elements.libViewChipAlbums.classList.toggle("active", filter === "albums");
  renderLibraryView();
}

function switchSidebarFilter(filter) {
  state.libraryFilter = filter;
  elements.chipLibPlaylists.classList.toggle("active", filter === "playlists");
  elements.chipLibArtists.classList.toggle("active", filter === "artists");
  elements.chipLibAlbums.classList.toggle("active", filter === "albums");
  renderSidebarLibrary();
}

// Toast System
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

// Ambient Background Color
function updateAmbientHeaderColor(colorHex) {
  if (elements.ambientHeaderBg) {
    elements.ambientHeaderBg.style.background = `linear-gradient(180deg, ${colorHex} 0%, rgba(18, 18, 18, 0.95) 70%, #121212 100%)`;
  }
  if (elements.npModalBackdrop) {
    elements.npModalBackdrop.style.background = `linear-gradient(180deg, ${colorHex} 0%, rgba(18, 18, 18, 0.95) 60%, #121212 100%)`;
  }
}

function setTimeGreeting() {
  const hr = new Date().getHours();
  let greeting = "Good evening";
  if (hr >= 4 && hr < 12) greeting = "Good morning";
  else if (hr >= 12 && hr < 17) greeting = "Good afternoon";
  if (elements.greetingText) elements.greetingText.textContent = greeting;
}

// ==========================================================================
// 12. HOME PAGE SECTION RENDERERS
// ==========================================================================

function renderHomeQuickGrid() {
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
}

function renderMadeForYou() {
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
        playPlaylistById(plId);
      } else {
        navigateTo("playlist", plId);
      }
    });
  });
}

function renderPopularAlbums() {
  if (!elements.popularAlbumsRow) return;
  elements.popularAlbumsRow.innerHTML = POPULAR_ALBUMS.map(alb => {
    const s = TRACKS_DATA.find(t => t.album.toLowerCase().includes(alb.album.toLowerCase()) || (alb.tracks && alb.tracks.includes(t.id))) || TRACKS_DATA[0];
    return `
      <div class="music-card" data-album-name="${escapeHtml(alb.album)}">
        <div class="card-img-wrap">
          <img src="${s.cover}" alt="${escapeHtml(alb.album)}">
          <button class="card-play-btn" title="Play ${escapeHtml(alb.album)}">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
          </button>
        </div>
        <h4 class="card-title">${escapeHtml(alb.album)}</h4>
        <p class="card-desc">Album • ${escapeHtml(alb.artist)}</p>
      </div>
    `;
  }).join("");

  elements.popularAlbumsRow.querySelectorAll(".music-card").forEach(c => {
    c.addEventListener("click", (e) => {
      const albName = c.dataset.albumName;
      if (e.target.closest(".card-play-btn")) {
        playAlbumByName(albName);
      } else {
        navigateTo("album", albName);
      }
    });
  });
}

function renderTrendingSongs() {
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
}

function renderRecommendedMusic() {
  if (!elements.recommendedRow) return;
  const recSongs = TRACKS_DATA.filter(t => RECOMMENDED_TRACK_IDS.includes(t.id));
  elements.recommendedRow.innerHTML = recSongs.map(s => `
    <div class="music-card" data-track-id="${s.id}">
      <div class="card-img-wrap">
        <img src="${s.cover}" alt="${escapeHtml(s.title)}" data-track-cover-id="${s.id}">
        <button class="card-play-btn" title="Play ${escapeHtml(s.title)}">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
        </button>
      </div>
      <h4 class="card-title">${escapeHtml(s.title)}</h4>
      <p class="card-desc">${escapeHtml(s.artist)} • ${escapeHtml(s.album)}</p>
    </div>
  `).join("");

  elements.recommendedRow.querySelectorAll(".music-card").forEach(c => {
    c.addEventListener("click", () => {
      const tId = parseInt(c.dataset.trackId);
      playSongById(tId, recSongs);
    });
  });
}

function renderHomePlaylistsRow() {
  if (!elements.homePlaylistsRow) return;
  const allPl = [...state.userPlaylists, ...DEFAULT_PLAYLISTS];
  elements.homePlaylistsRow.innerHTML = allPl.slice(0, 8).map(pl => {
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
        <p class="card-desc">Playlist • ${pl.tracks ? pl.tracks.length : 0} songs</p>
      </div>
    `;
  }).join("");

  elements.homePlaylistsRow.querySelectorAll(".music-card").forEach(c => {
    c.addEventListener("click", (e) => {
      const plId = c.dataset.playlistId;
      if (e.target.closest(".card-play-btn")) {
        playPlaylistById(plId);
      } else {
        navigateTo("playlist", plId);
      }
    });
  });
}

function renderPopularArtists() {
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
}

function renderPodcasts() {
  if (!elements.podcastsCardsRow) return;
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
}

// ==========================================================================
// 13. INITIALIZATION
// ==========================================================================

function initApp() {
  loadFromStorage();
  setTimeGreeting();

  // 1. Render all 8 Home Sections
  renderHomeQuickGrid();
  renderMadeForYou();
  renderPopularAlbums();
  renderTrendingSongs();
  renderRecommendedMusic();
  renderHomePlaylistsRow();
  renderPopularArtists();
  renderTrackRows(elements.homeTrackRows, TRACKS_DATA);
  renderPodcasts();

  // 2. Play All Home Button
  if (elements.playAllHomeBtn) {
    elements.playAllHomeBtn.addEventListener("click", () => {
      playSongById(TRACKS_DATA[0].id, TRACKS_DATA);
    });
  }

  // 3. Render Library Sidebar & Badges
  renderSidebarLibrary();
  updateLikedBadge();

  // 4. Render Search Browse Genres
  renderBrowseGenres();

  // 5. Setup Audio & Event Listeners
  setupAudioListeners();
  setupEventListeners();
  setupContextMenus();

  // 6. Load Initial Track (Lady Gaga & Bruno Mars - Die With A Smile Acoustic)
  setTrack(TRACKS_DATA[20], false);

  // 7. Background iTunes high-res cover fetch
  fetchHighResArtwork();
}

// Run engine on DOM loaded
document.addEventListener("DOMContentLoaded", initApp);
