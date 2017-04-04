var twit = require('twit');
var config = require('./config.js');

var T = new twit(config);

// all the twitter accounts to access
var handles_array = [
  //quotes accounts
  'wisequotesnet',
  'GreatestQuotes',
  'DeepLifeQuotes',
  'BestSmartQuotes',
  'deep_live_quote',

  // women
  'camanpour',
  'thenextwomen',
  'ChelseaClinton',
  'Laurie_David',
  'Farrell_Diana',
  'Mgorbis',
  'RosabethKanter',
  'brainpicker',

  // polictians
  'SenSanders',
  'Elizabethforma',
  'realDonaldTrump',
  'BarackObama',
  'HillaryClinton',

  //journalsts
  'benpolitico',
  'PElliottAP',
  'thegarance',
  'ErinMcPike',
  'markknoller',

  // NEWS / PUNDITS
  'nprpolitics',
  'LarrySabato',
  'Dave_Wasserman',
  'chucktodd',
  'nicopitney',
  'stevebenen',
  'ewerickson',
  'mindyfinn',
  'dmataconis',
  'TPCarney',
  'jbarro',
  'Heminator',

  // OTHER Famous
  'chr1sa',
  'danariely',
  'richardbranson',
  'elonmusk',
  'SethMacFarlane',
  'jimmykimmel',
  'StephenAtHome',
  'lenadunham',
  'BillNye',
  'stephenfry',
  'DalaiLama',
  'rickygervais',
  'RichardDawkins',
  'BillGates',
];

//add to beginning of Tweet
var trump_begin_array = [
  "A lot of people are saying, ",
  "Many people are saying, ",
  "So many people say ",
  "Friends of mine will say, ",
  "We do have a problem. ",
  "Look at what happened. ",
  "And you watch last night, ",
  "And you see people talking, ",
  "If you remember, ",
  "They say ‘Well Trump has a point’, ",

];

//add to end of tweet
var trump_end_array= [
  " . It's a disaster.",
  " . Believe me.",
  " . Trust me.",
  " , Tremendous harm.",
  " , Pathetic.",
  " , Sad.",
  " , Such hatred.",
  " , Don’t worry!",
  "  Total disaster.",
  "  Weak!",
  "  Terrible!",
  "  Rigged!",
  "  Bad.",
  "  Good.",
];

//hashtag to end
var hashtag_array =  [
  " #Trump",
  " #winning",
  " #China",
  " #foxandfriends",
  " @foxandfriends",
  " #DrainTheSwamp",
  " #MAGA",
  " #MAGA",
  " #MAGA",
  " #MAGA",
  " #MAGA",
  " #USA",
  " #jobs",
  " #sick",
];

// good + man array *whenever Trump name mentioned
var good_array =  [
  " Good",
  " Awesome",
  " Amazing",
  " The best",
  " Great",
  " Wise",
  " Suberb",
  " Smart",
];
// good +man array
var man_array =  [
  " man.",
  " dude.",
  " pal.",
  " guy.",
  " person.",
  " leader.",
];

var makeTweet = function(){

// random variables to get tweets
    var randomNumber = Math.floor(Math.random() * 10) + 1

    var handle = handles_array[Math.floor(Math.random() * handles_array.length)];
    var options = { screen_name: handle, count: 1 };
    console.log(handle);

    // make random number calls
    var trump_begin = trump_begin_array[Math.floor(Math.random() * trump_begin_array.length)];
    var trump_end = trump_end_array[Math.floor(Math.random() * trump_end_array.length)];
    var hashtag = hashtag_array[Math.floor(Math.random() * hashtag_array.length)];
    //get random good + man
    var good = good_array[Math.floor(Math.random() * good_array.length)];
    var man = man_array[Math.floor(Math.random() * man_array.length)];



// get the tweet from the "handle user" options
T.get('statuses/user_timeline', options , function(err, data) {



  // for (var i = 0; i < data.length ; i++) {
    console.log(data[0].text);
    var tweet = data[0].text;

  if (tweet.includes(" black ") || tweet.includes(" Black ") || tweet.includes(" African ")){

    console.log("We got black people");
    tweet += " I love the blacks.";
  }
  else if (tweet.includes(" women ") || tweet.includes(" girls ")|| tweet.includes(" Women ")){

      console.log("We got ladies ");
      tweet += " I love ladies.";
  }
  else if (tweet.includes("mexican") || tweet.includes("Mexican") || tweet.includes(" Spanish ")){

      console.log("We got mexicans ");
      tweet += " Mexican's love me.";
    }


  else if (tweet.includes("immigrants") || tweet.includes("Immigrants") || tweet.includes("muslim") || tweet.includes("Muslim")){

          console.log("We got muslims ");
          tweet += " Scary people.";
        }


    else if (tweet.includes("jewish") || tweet.includes("Jewish") || tweet.includes(" Israel ")){

        console.log("We got jews ");
        tweet += " I love the jews.";
      }

      else if (tweet.includes("Poor") || tweet.includes(" poor ")){

          console.log("We got the poor ");
          tweet += " I love the poor.";
        }


// if tweet doesn't contain any of these words, then follow three rules
else {
        if (randomNumber <= 1){
          console.log("Nothing but a trump begin");
        tweet = trump_begin + tweet;
        }

        if (randomNumber >1 && randomNumber <= 4){
          console.log("Nothing but a trump end");
         tweet = tweet + trump_end;
       }


        if (randomNumber >4 && randomNumber <= 10){
          console.log("Nothing but a hashtag");
          tweet = tweet + hashtag;
        }
           else {
             tweet = tweet;

             }
  };
  //};

// look for certain words, and manipulate them
if (tweet.includes(" is ")){

      console.log("We got is");
      tweet = tweet.replace(" is ", " is REALLY ");
    }

 if (tweet.includes(" are ")){

        console.log("We got are");
        tweet = tweet.replace(" are ", " are VERY ");
      }


if (tweet.includes("bad")){

    console.log("We got bad ");
    tweet = tweet.replace("bad", "BAD");
  };


  if (tweet.includes("good")){

      console.log("We got good");
      tweet = tweet.replace("good", "good, so good,");
    };

    if (tweet.includes("%")){

        console.log("We got %");
        tweet = tweet.replace("%", "%, maybe even 100%,");
      };

      if (tweet.includes(" tap ")){

          console.log("We got tap");
          tweet = tweet.replace(" tap ", " tapp ");
        };


    if (tweet.includes("Trump")){

        console.log("We got Trump");
          tweet += good + man;
      };



  //Cost. Money. Expensive. Costly.
if (tweet.includes("cost") || tweet.includes("money") || tweet.includes("cash")|| tweet.includes("expensive")  || tweet.includes("expensive") || tweet.includes("price")){

      console.log("We got money ");
      tweet += " Mexico will pay for it.";
    }
//Russia
    if (tweet.includes("Russia") || tweet.includes("Russsian") || tweet.includes("russia") || tweet.includes("russsian") || tweet.includes("putin")  || tweet.includes("spies") || tweet.includes("Putin")){

          console.log("We got russians");
          tweet += " I've never met Putin.";
        }



    //tweet = "@" + handle + " " + tweet;
    tweet +=" @" + handle;

    console.log(tweet.length)
      //console.log(status.text);
  // }


  T.post('statuses/update', { status: tweet}, function(err, data, response) {
    console.log(tweet);
    console.log(randomNumber);
  })
})

};

makeTweet();
setInterval(makeTweet, 36000);
// information
