export default {
  OverlayEnabeld:
    "Kailangan ng Dota Coach ang overlay para sa Dota 2 na ma-enable sa Overwolf. Mangyaring i-update ang mga setting ng Overwolf.",
  OverlayEnabeldSettings: "OPEN SETTINGS",
  OverlayEnabeldRestart:
    "Matagumpay mong pinagana ang overlay ng Dota 2. Mangyaring isara at muling buksan ang Dota Coach, Overwolf at Dota 2 para maging epektibo ang pagbabago.",

  GameStateIntegration:
    "Dota Coach ay nangangailangan ng access sa Game State Integration API na binigay ng Dota 2. Siguraduhing ilagay ang '-gamestateintegreation' sa Dota 2 launch options.",
  GameStateIntegrationTypo:
    "Mayroong typo sa iyong mga pagpipilian sa paglunsad ng Dota 2 para sa Pagsasama ng Estado ng Game. Mangyaringpalitan ang ''{typo}'' ng 'gamestateintegration'.",
  GameStateIntegrationMore: "MORE",

  LaunchDota:
    "Ilunsad ang Dota 2 upang makinabang mula sa mga tampok na in-game tulad ng stats ng manlalaro, timers, pagsubaybay sa pagganap at Pagtuturo.",
  DotaConnectivityStart: "Kumokonekta sa Dota 2...",
  DotaConnectivityStatus:
    "Kumokonekta sa Dota 2...<br></br>Kasalukuyangkatayuan: ''{currentStatus}'' ({attempt}/{maxAttempts} pagtatangka)",
  DotaConnectivityError:
    "Ang koneksyon sa Dota 2 ay hindi maitatag.<br></br>Mangyaringsubukang muli mamaya.<br></br>(Error: ''{finalStatus}'')",
  DotaConnectivityMissingEvents:
    "Ang koneksyon sa Dota 2 ay hindi makapagrehistro sa lahat ng kinakailangang kaganapan. <br></br>Pakisubukang i-restart muli ang app sa ibang pagkakataon.<br></br>(mga nawawalang kaganapan: ''{missingEvents}'')",
  DotaConnectivityFailed:
    "Ang koneksyon sa Dota 2 ay nasisira. Nagtatrabaho kami sa isang pag-aayos, mangyaring subukang muli mamaya.",
  DotaConnectivityCrashed: "Ang koneksyon sa Dota ay nag-crash. Mangyaring subukan na muling ilunsad ang app.", DotaConnectivityUnknownError: "Ang koneksyon sa Dota 2 ay may hindi kilalang error ({error}).",

  QuickStart: "Mabilis na Pagsisimula",
  QuickStartMessage: `
    <p>
      Tiyaking idagdag ang '-gamestateintegration' sa iyong mga pagpipilian sa paglulunsad ng Dota (<a_GSI>I-click upang ipakita dito ang Gabay</a_GSI>).
    </p>
    <p>
      Costumize Dota Coach sa iyong mga pangangailangan. Tumungo sa menu ng mga setting sa kanang sulok sa itaas!
    </p>
    <hr></hr>
    <p>
      Makipag-ugnay sa mga timers at infoboxes sa panahon ng laro upang makuha ang mapagkumpetensyang gilid:
      <ul>
        <li>Pindutin ang<b> LEFT-CLICK </b>upang simulan ang Roshan-, Glyph-, Buyback-, Ultimate-Timers.</li>
        <li>Pindutin<b> ang pulang X </b>upang ihinto ang Roshan-, Glyph-, Buyback-, Ultimate-Timers.</li>
        <li>Pindutin ang<b> LEFT-CLICK </b>upang buksan ang mga infobox sa itaas at sa minimap.</li>
      </ul>
    </p>
    <hr></hr>
    <p>
      Ikaw ay isang mahalagang miyembro ng komunidad ng Dota Coach at gusto naming marinig mula sa iyo:
      <ul>
        <li>Sumali sa aming <a_discord>Discord Server</a_discord> upang makipag-usap nang direkta sa aming Pro-Coaches, maghanap ng mga tulad ng pag-iisip na mga manlalaro at magmungkahi ng mga pagbabago sa Dota Coach! </li>
        <li>Sumali sa aming <a_reddit>Subreddit</a_reddit> o sundin ang Dota Coach sa <a_twitter>social media</a_twitter> upang makakuha ng mga live na update sa mga paparating na pagbabago at pagpapabuti!</li>
      </ul>
    </p>
    <hr></hr>
    <p>
      Nakakuha pa rin ng mga katanungan? Walang alalahanin, nakuha namin kayo sakop:
      <ul>
        <li><a_FAQs>FAQ</a_FAQs></li>
        <li><a_heropedia>Heropedia</a_heropedia></li>
      </ul>
    </p>
    <hr></hr>
    <p>
      Gusto mong ipamalas ang buong lakas ng Dota Coach sa loob ng 3 minuto? Panoorin ang buong video ng gabay: <a_tutorial_video>Gabay sa Video</a_tutorial_video>
    </p>`,
  UseInfoboxes: "Paano gamitin ang Mga Infobox",
  UseInfoboxesMessage: `
    <p>
    LEFT-CLICK sa mga infobox sa itaas ng mga manlalaro upang makita ang kanilang mga istatistika.
    </p>
    <p>
      Kapag ang isang manlalaro ay pumili ng isang bayani makikita mo ang iba pang nauugnay na impormasyon.
    </p>
    <p>
      Tandaan: Ang mga istatistika ay ipinapakita para sa mga manlalaro na may mga pampublikong profile.
    </p>`,
  ActivateTimers: "Paano i-activate ang mga Timer",
  ActivateTimersMessage: `
    <p>
   I-activate ng LEFT-CLICK ang Roshan, Glyph, Buybacks, Ultimate timers at Infoboxes
    </p>
    <p>
      Tandaan na ang mga Ultimate timer ay available lang sa mga subscriber.
    </p>`,
  ShareTimers: "Paano ibahagi at ihinto ang mga Timer",
  ShareTimersMessage: `
    <p>
    Binabati kita! Matagumpay mong na-activate ang {timer} timer!
    </p>
    <p>
      LEFT-CLICK sa timer para ibahagi ito sa iyong mga kaibigan. Mag-click sa pulang X upang ihinto ito.
    </p>`,

  AppUpgraded: "Na-upgrade ang App sa bersyon {bersyon}",
};
