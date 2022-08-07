/**
 * Holds all localized strings for the web FAQ
 */

export default {
	// Headers
	"app.faqs.title": "Frequently Asked Questions (FAQs)",

	// Sections
	"app.faqs.popular": "Most Popular Questions",

	// Application FAQs
	"app.faqs.application": "Application",
	"app.faqs.application.getStarted.question": "How do I get started?",
	"app.faqs.application.getStarted.answer": `<p>
						The first step is to add '-gamestateintegration' to your Dota 2 launch options.<br>
						If you added it already and still get a warning message, make sure to log into your steam account.<br/>
						A guide on how to add Dota 2 launch parameters can be found <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2">here</a>.
					</p>
					<p>
						After that, you can customize the application to your needs.<br>
						Head to the settings menu in the top right corner:<br>
						<div class="mt-2"></div>
						<img src="./images/faqs/settings.png" class="img-fluid rounded shadow" style="width:61%" />
					<p>
					<p>Then start a match to access the in-game functionality of Dota Coach.</p>
					<p>
						During the hero selection phase, you get player stats and recommended bans and picks:<br>
						<div class="mt-2"></div>
						<img src="./images/faqs/hero_selection.png" class="img-fluid rounded shadow" style="width:39%">
					</p>
					<p>
						Once heroes have been selected you can chose your role (carry/safe lane, mid, offlane, core or soft/hard support) and the heroes you expect to lane against.<br>
						Based on this Dota Coach will recommend counter items for the laning phase.<br>
						Note that you should combine these items with the items recommended by our guides in Dota 2.<br>
						<div class="mt-2"></div>
						<img src="./images/faqs/items_recommendation.png" class="img-fluid rounded shadow" style="width:39%">
					</p>
					<p>
						In the game the following timers will appear for hero buybacks:<br>
						<div class="mt-2"></div>
						<img class="img-fluid rounded shadow" src="./images/faqs/buyback_timers.png" style="width: 38%"><br><br>
						And the following for Roshan and Glyph of Fortification:<br>
						<div class="mt-2"></div>
						<img class="img-fluid rounded shadow" src="./images/faqs/roshan_timer_active.png" style="width:32%"><br><br>
						If other players in your team are using Dota Coach, the activation of timers will be shared among the team.<br>
						So if you forget to activate a timer, don't worry, a teammate might have activated it!<br>
					</p>
					<p>Subscribers get hero coaching for all 123 heroes, access to ultimate timers, ads removed and support the development of the app.<br> 
					The subscription fee is USD 1.99 per month.</p>
					<p>
					Do you want to see the app in action and learn about its features? <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://dota-coach.com/video/DotaCoachTutorial.mp4">Watch our tutorial
					video</a>!<br> 
					Want to talk to us? No problem: <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://discord.gg/9WhAANq">Join our Discord community server</a>!
					</p>`,

	"app.faqs.application.videoGuide.question": "Do you have a video guide?",
	"app.faqs.application.videoGuide.answer": `You can find our 3 minute video guide <a class="link-danger" target="_blank" rel="noopener noreferrer" href ="https://dota-coach.com/video/DotaCoachTutorial.mp4">here</a>.`,

	"app.faqs.application.gameStateIntegration.question": "What is Game State Integration?",
	"app.faqs.application.gameStateIntegration.answer": `The Game State Integration is an integral part of Dota Coach. It is provided by Valve to access all events in Dota 2 games.<br>
					You must add '-gamestateintegration' as a Dota 2 launch parameter.<br>
					Without it, Dota Coach will not work!<br>
					For further information on how to enable it click <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2">here</a>.`,

	"app.faqs.application.getBanned.question": "Can I get banned for using Dota Coach?",
	"app.faqs.application.getBanned.answer": `<p>
					<b>The Dota Coach app will NOT get you banned.</b><br>
					The app is built on top of the Overwolf platform.<br>
					The Overwolf platform is built in collaboration with Valve and the Dota 2 team.<br>
					You can read more here: <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned">Overwolf Won't Get You Banned</a><br>
					</p>`,

	"app.faqs.application.update.question": "How do I update to the newest Version?",
	"app.faqs.application.update.answer": `When a new version gets released, simply shut down Dota Coach and Overwolf.<br>
                    After that, restart Overwolf, as well as Dota Coach.<br>
                    Once Dota Coach has fully loaded, it should be updated to the newest version! You can check the version in the settings menu!`,

	"app.faqs.application.languages.question": "How can I change the language?",
	"app.faqs.application.languages.answer": `Open the settings window. You can find it in the menu in the top right corner of the desktop window.<br>
					The languge setting is located in the bottom right corner.<br>
					Please be aware, that we only support a certain set of languages.<br>
					If your native language is missing, let us know or help with the translation!<br>
					<div class="mt-2"></div>
					<img src="./images/faqs/language.png" class="img-fluid rounded shadow">`,

	"app.faqs.application.translations.question": "Can I help with translation?",
	"app.faqs.application.translations.answer": `Yes of course! Contact us here:<br>
					<ul>
						<li><a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://discord.gg/uabGsGazRe">Discord</a></li>
						<li><a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://github.com/roserens/dotaCoach-i18n">Github</a></li>
						<li>info(at)dota-coach.com</li>`,

	"app.faqs.application.getHelp.question": "Where can I get additional help?",
	"app.faqs.application.getHelp.answer": `Join our Discord community server for live support <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://discord.gg/uabGsGazRe">here</a>.`,

	"app.faqs.application.money.question": "How does Dota Coach make money?",
	"app.faqs.application.money.answer": `Most features of the app are available to all players for free.<br> 
					The Dota Coach app makes money through displaying ads in some parts of the app.<br>
					Also players can pay a monthly subscription fee to get access to some exclusive features.<br>
					The pro subscription also turns off the ads.<br>`,

	// Timers FAQs
	"app.faqs.timers": "Timers",
	"app.faqs.timers.start.question": "How do I start a timer?",
	"app.faqs.timers.start.answer": `<p>
						Left-click on timers to activate them. This works for Roshan, Glyph of Fortification, Buybacks and
						Ultimates.<br>	
					<div style="display:flex">
						<div style="width: 40%">Roshan timer before activation:<br>
							<div class="mt-2"></div>
							<img class="img-fluid rounded shadow" src="./images/faqs/roshan_timer_inactive.png" style="width:80%">
						</div>
						<div style="width: 40%">Roshan timer after activation:<br>
							<div class="mt-2"></div>
							<img class="img-fluid rounded shadow" src="./images/faqs/roshan_timer_active.png" style="width:80%">
						</div>
					</div>`,

	"app.faqs.timers.stop.question": "How do I stop a timer?",
	"app.faqs.timers.stop.answer": `Click on the red-cross to stop the timer.<br>`,

	"app.faqs.timers.sharing.question": "How do I announce a timer?",
	"app.faqs.timers.sharing.answer": `
						You can share active timers by left-clicking on them.<br> 
						The app then automatically posts the timer status onto the team chat.<br>
						<br>
						Example buyback timers during a match:<br>
						<div class="mt-2"></div>
						<img class="img-fluid rounded shadow" src="./images/faqs/buyback_timers.png" style="width: 38%"><br><br>
						Resulting post on team chat:<br>
						<div class="mt-2"></div>
						<img class="img-fluid rounded shadow" src="./images/faqs/buyback_timers_chat.png" style="width: 57%"><br><br>
						This works for Roshan, Aegis, Glyph of Fortification, Buybacks and Ultimates.`,

	"app.faqs.timers.disable.question": "How do I disable a timer?",
	"app.faqs.timers.disable.answer": `Open the settings window.<br> 
					You can find it in the top right corner under 'change settings'.<br>
					You can then select the timers components you don't want to see.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/timers.png">`,

	"app.faqs.timers.missing.question": "Why do I not see timers?",
	"app.faqs.timers.missing.answer": `There are multiple reasons why your timers are not shown.<br>
					If the Dota 2 game coordinator is not found, Dota Coach does not get any Data on the match which will result in no timers.<br>
					Another reason is the missing launch parameter '-gamestateintegration'. Make sure that it is added. Check our FAQ on how to add it.<br>
					Sometimes, the timers can go missing during repositon.<br>
					Simply hit the 'reset' button in the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reset_position.png">`,

	"app.faqs.timers.ultimate.question": "Why do I not see ultimate timers?",
	"app.faqs.timers.ultimate.answer": `Ultimate timers are a premium feature that is only available to our subscribers.<br>
					A subscription is 1.99$ / month.<br>
					Open the application menu and click on manage subscription.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/subscribe.png">`,

	// Game Modes FAQs
	"app.faqs.gameModes": "Game Modes",
	"app.faqs.gameModes.supported.question": "What game modes do you support?",
	"app.faqs.gameModes.supported.answer": `Dota Coach works in all Game Modes.<br>
					But be aware that some timers and timings might be not fully operational in Turbo matches.<br>
					Ability Draft is also not fully supported.<br>`,

	"app.faqs.gameModes.spectating.question": "Can I spectate games?",
	"app.faqs.feagameModes.spectatingtures.answer": `Yes, you can! Dota Coach works in spectator mode.<br>
					It will enhance your overall spectator experience due to providing additional information.<br>
					Try it out!<br>`,

	"app.faqs.gameModes.trounament.question": "Can I use the app in offical tournaments / ticketed games?",
	"app.faqs.gameModes.trounament.answer": `The short answer is no.<br>
					Offical games send the gamestateintegration data delayed, which results in delayed timers and bad app functionality.<br>
					You can not use Dota Coach during offical tournament games (ticketed games).<br>`,

	// Audio FAQs
	"app.faqs.audio": "Audio",
	"app.faqs.audio.enable.question": "The audio is not playing, how can I enable it?",
	"app.faqs.audio.enable.answer": `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can find the sound output control in the top right corner of the settings window.<br>
					Make sure to select the proper speaker (audio-output) and that the volume is not zero percent.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/audio.png">`,

	"app.faqs.audio.volume.question": "How can I adjust the sound volume?",
	"app.faqs.audio.volume.answer": `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can find the volume adjustment control in the top right corner of the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/audio.png">`,

	"app.faqs.audio.disable.question": "How do I disable audio messages?",
	"app.faqs.audio.disable.answer": `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can disable the following voice components individually:
					<ul>
						<li>Notifcations</li>
						<li>Voice coaching own hero</li>
						<li>Voice coaching enemy heroes</li>
					</ul>`,

	// Windows FAQs
	"app.faqs.windows": "Windows",
	"app.faqs.windows.ban.question": "How can I see pick/ban suggestions?",
	"app.faqs.windows.ban.answer": `Once you enter a game and the draft begins, a Dota Coach logo will appear in the top left corner.<br>
					Click it to show or hide the draft information. <br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/buttondraft.png">`,

	"app.faqs.windows.role.question": "How can I open the role selection?",
	"app.faqs.windows.role.answer": `Once you enter a game, a Dota Coach logo will appear above the minimap.<br>
					Click it to show or hide the role selection and laning information. <br>`,

	"app.faqs.windows.secondScreen.question": "How do I enable the second desktop window?",
	"app.faqs.windows.secondScreen.answer": `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					Select your second or main monitor to enable the window. <br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/secondscreen.png">`,

	"app.faqs.windows.reposition.question": "How can I reposition windows?",
	"app.faqs.windows.reposition.answer": `Open the settings menu in the top right corner of the desktop window.<br>
					Activate the Reposition slider in the bottom right corner of the settings window.<br>
					De-activate the Reposition slider once you are done to safe your new positions. <br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reposition.png">`,

	"app.faqs.windows.green.question": "Why are all windows green?",
	"app.faqs.windows.green.answer": `Your windows turn green if the reposition slider in the settings menu is set to active.<br>
					Open the settings menu in the top right corner of the desktop window.<br>
					De-activate the Reposition slider in the bottom right corner of the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reposition.png">`,

	"app.faqs.windows.showHide.question": "How can I hide/show the in-game overlay while playing?",
	"app.faqs.windows.showHide.answer": `To Hide/Show in-game overlay while playing, press the assigned hotkey.<br>
					The standard hotkey is 'CTRL + b'.<br>
					If you want to change the hotkey, head to the overwolf app settings.<br>
					Check our FAQ under 'Hotkeys' if you are not sure where to find it.<br>`,

	"app.faqs.windows.missing.question": "Why are some windows missing?",
	"app.faqs.windows.missing.answer": `There are multiple reasons why your timers are not shown.<br>
					If the Dota 2 game coordinator is not found, Dota Coach does not get any Data on the match which will result in no timers.<br>
					Another reason is the missing launchparameter '-gamestateintegration'. Make sure that it is added. Check our FAQ on how to add it.<br>
					Sometimes, the timers can go missing during repositon.<br>
					Simply hit the 'reset' button in the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reset_position.png">`,

	"app.faqs.windows.disable.question": "How can I disable windows I do not like?",
	"app.faqs.windows.disable.answer": `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can disable the following window components:
					<ul>
						<li>Infoboxes</li>
						<li>All individual timers (Own and enemy team)</li>
						<li>Rune Countdowns</li>
						<li>Performance Tracker</li>
						<li>Subtitle Window</li>
					</ul>`,

	// Hotkeys FAQs
	"app.faqs.hotkeys": "Hotkeys & Misclick Protection",
	"app.faqs.hotkeys.change.question": "Where can I change the hotkeys? ",
	"app.faqs.hotkeys.change.answer": `The app hotkey are changed in the overwolf application settings.<br>
					<ul>
						<li>Right click the overwolf symbol in your taskbar.</li>
						<li>Select settings.</li>
						<li>Select Overlay & Hotkeys in the top left corner.</li>
						<li>Select Dota 2 as game.</li>
						<li>Go to the Dota Coach Section.</li>
						<li>Change the hotkeys to your needs.</li>
					</ul>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/overwolfhotkeys.png">`,

	"app.faqs.hotkeys.misclick.question": "How can I enable the misclick protection?",
	"app.faqs.hotkeys.misclick.answer": `To avoid misclicks on in-game windows, you can enable a misclick protection modifer.<br>
					This will make windows only interactive if the modifier pressed while mouse-clicking.<br>
					We support 'alt', 'ctrl' and 'shift'.<br>
					Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can find the 'Mouse Click Modifier' Key in the top right corner of the settings window.<br>
					Please note that if you select 'shift' or 'ctrl' as modifier, announcing timers in chat will no longer work.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/mouseclickmod.png">`,

	"app.faqs.hotkeys.modifier.question": "What is the modifier key?",
	"app.faqs.hotkeys.modifier.answer": `The modifier key was introduced to avoid misclicks on window elements. <br>
					If you have encounter problems with misclicks on windows, make sure to enable the modifier key.`,

	// Streaming
	"app.faqs.streaming": "Streaming",
	"app.faqs.streaming.allowed.question": "Am I allowed to stream with the App?",
	"app.faqs.streaming.allowed.answer": `You are allowed to stream with our app at any given time!<br>`,
	"app.faqs.streaming.windows.question": "Why are some windows missing on stream?",
	"app.faqs.streaming.windows.answer": `OBS offers a variety of possibilites to capture in-game overlays.<br>
				If some of the app windows are missing on your stream, you should try the following:
				<ul>
				<li>Get the Dota2 window with game capture (right click Source -> Add -> Gamecapture)</li>
				<li>Get the Dota2 window with monitor capture (right click Source -> Add -> Monitorcapture)</li>
				</ul>`,

	"app.faqs.streaming.partnership.question": "Can I get a partnership?",
	"app.faqs.streaming.partnership.answer": `Yes, we offer partnerships to streamers, coaches and content creators!<br> 
				Please contact us with your proposal:
				<ul>
				<li>E-Mail: info (at) dota-coach.com</li>
				<li>Discord: Dota Coach#4076</li>
				</ul>`,

	// Account FAQs
	"app.faqs.account": "Account",
	"app.faqs.account.create.question": "How do I create an account?",
	"app.faqs.account.create.answer": `Follow the overwolf step by step <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'>tutorial</a> on how to create an account.<br>`,

	"app.faqs.account.login.question": "How do I log in?",
	"app.faqs.account.login.answer":
		`You can log in via the overwolf client, or directly within our application.<br>
					Both logins are located at the top right corner of their windows.<br>
					Simply click the overwolf logo to open the login dialog.<br>
					<div class="mt-2"></div>
					<img src="images/faqs/loginout.png" class="img-fluid rounded shadow">`,

	"app.faqs.account.logout.question": "How do I log out?",
	"app.faqs.account.logout.answer": `You can log out via the overwolf client, or directly within our application.<br>
					Both logouts are located at the top right corner of their windows.<br>
					Simply click the overwolf logo to open the logout dialog.<br>
					<div class="mt-2"></div>
					<img src="images/faqs/loginout.png" class="img-fluid rounded shadow">`,

	"app.faqs.account.manage.question": "Where can I manage my account?",
	"app.faqs.account.manage.answer": `You can manage your overwolf account directly in the overwolf client.<br>
					Click on the overwolf logo in the top right corner. <br>
					<div class="mt-2"></div>
					<img src="images/faqs/overwolfaccmanage.png" class="img-fluid rounded shadow">`,

	// Subscription FAQs
	"app.faqs.subscription": "Subscription",
	"app.faqs.subscription.features.question": "What features do I get?",
	"app.faqs.subscription.features.answer": `Our pro coach version comes a long with a number of features:<br>
					<ul>
						<li>Voice coaching for all heroes Dota 2 has to offer.</li>
						<li>Adjustable ultimate timers for the enemy and your team.</li>
						<li>Advertisement free Dota Coach experience.</li>
						<li>Supporter Discord role.</li>
					</ul>`,

	"app.faqs.subscription.payment.question": "Which payment options do I have?",
	"app.faqs.subscription.payment.answer": `All payments are done through the <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf</a> 
					platform which collaborates with a broad variety of payment providers.<br><br>
					Most popular payment methods:<br>
					<ul>
						<li>Credit & Debit Cards</li>
						<li>Paypal</li>
						<li>Amazon Pay</li>
						<li>Skrill</li>
						<li>Visa</li>
						<li>Maestro</li>
					</ul>
					Be aware that payment options can be limited depending on your current country of residence.<br>`,

	"app.faqs.subscription.proCoach.question": "How can I get the pro Version?",
	"app.faqs.subscription.proCoach.answer": `After installing Dota Coach you can subscribe to our services.<br>
					<ul>
						<li>Open the Overwolf Desktop Client.</li>
						<li>Click on 'Library'.</li>
						<li>Click on the small settings button next to the Dota Coach logo.</li>
						<li>Click on 'view in appstore'</li>
						<li>Click 'Subscribe' inside the new window.</li>
						<li>Follow the promoted steps.</li>
					</ul>
					Also check out the <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf FAQ</a>
					on how to subscribe to apps.<br>
					<div class="mt-2"></div>
					<img src="images/faqs/subscribesteps.png" class="img-fluid rounded shadow">`,

	"app.faqs.subscription.cancel.question": "How can I cancel my subscription?",
	"app.faqs.subscription.cancel.answer": `All subscriptions are handled by Overwolf.<br><br>If you want to cancel your subscription, refund or forgot to cancel, please follow the offical <a class="link-danger" target="_blank" rel="noopener noreferrer" href ="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf FAQ</a>.`,

	// Issue FAQs
	"app.faqs.issues": "Issues",
	"app.faqs.issues.appNotWorking.question": "Why does the application not work?",
	"app.faqs.issues.appNotWorking.answer": `<p>
						You must add '-gamestateintegration' to your Dota 2 launch options for the app to work.<br>
						Additional information how to add the launch parameter can be found <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2">here</a>.
					</p>`,

	"app.faqs.issues.bug.question": "How can I report an issue or bug?",
	"app.faqs.issues.bug.answer": `You can find the 'report issue' button in the top menu of the desktop application window.<br>
					If you need further assistance, please join our <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://discord.gg/uabGsGazRe">Discord</a> server!<br>
					<div class="mt-2"></div>
					<img src="images/faqs/bugreport.png" class="img-fluid rounded shadow">`,

	"app.faqs.issues.fps.question": "How can I improve my frames per second (FPS)?",
	"app.faqs.issues.fps.answer": `If you encounter low frames per second during games, please restart Dota 2, in most cases this will fix frame rate problems without any further actions.<br><br>
					Tabbing (Alt+Tab) in between your desktop and Dota 2 will also cause frame rate problems overtime. If this happens, restart Dota 2.<br>
					<br>
					The steam notifaction message display also causes frame rate problems.<br>
					You can disable it here:<br>
					<ul>
						<li>Open your frind list (Right click steam in the taskbar -> friends).</li>
						<li>Left-click on the settings wheel on the top right corner.</li>
						<li>Disable all notifactions as shown in the image below.</li>
					</ul>
					<div class="mt-2"></div>
					<img src="images/faqs/steamnotification.png" class="img-fluid rounded shadow">`,

	"app.faqs.issues.windowNotShowing.question": "Why is a window not showing?",
	"app.faqs.issues.windowNotShowing.answer": `This can happen when you customize the location of the timers and then change the screen resolution.<br> 
					We suggest that you reset the position of the timers in the settings menu.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reset_position.png">`,

	"app.faqs.issues.fitScreen.question": "Why does the window not fit my screen?",
	"app.faqs.issues.fitScreen.answer": `Please make sure that the windows operating system scaling is set to 100%. <br>
					Make sure to restart your operating system after you make these changes! <br>
					If you have set it to 100%, and the windows are still no fit for your screen, <br>
					please be aware that Dota Coach does not support screen resolutions below 1150px width.`,

	// Hero Guides FAQs
	"app.faqs.heroGuides": "Hero Guides",
	"app.faqs.heroGuides.quality.question": "Are your Hero Guides good?",
	"app.faqs.heroGuides.quality.answer": `All Hero Guides that we provide are created and maintained by professional Dota 2 coaches and players.<br>
					Their in-game ranks are bewteen Immortal Rank 1000 and Immortal Rank 100 (8000 - 10000 MMR).<br>
					You can look up their ranks on the offical Dota 2 <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://www.dota2.com/leaderboards/#europe-0">Leaderboards</a>.`,

	"app.faqs.heroGuides.get.question": "How can I get your Hero Guides?",
	"app.faqs.heroGuides.get.answer": `We have created in-game guides for every hero in the game.<br>
					They contain all the tips and item builds that are provided in the "Dota Coach App".<br>
					Subscribe to the them <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://dota-coach.github.io/dota_guides.html">here</a>.<br>
					Select a hero and click on 'Get Steam Guide':<br>
					<ul>
					<li>Scroll down until you see a green button 'Subscribe'.</li>
					<li>Click 'Subscribe' on the Steam page.</li>
					<li>If you're not logged in yet, please log into Steam.</li>
					<li>The login is only necessary the first time.</li>
					<li>Click 'Favorite' on the Steam page - this will make the guide appear on top of your guides list in the game</li>
					<li>Click 'Thumbs Up' to make the guide more visible to other users - optional, but appreciated! </li>
					<li>Repeat the process for all heroes that you like to play.</li>
					<li>You have to restart Dota to see your selected guides in the game!</li>
					</ul>
					<script>_buildCarousell()</script>`,

	"app.faqs.heroGuides.missing.question": "Why are the Hero Guides not showning?",
	"app.faqs.heroGuides.missing.answer": `If you already subscribed to our Hero Guides and they do not show in-game, <br>
					make sure to restart Dota 2!<br>
					You can join a 'Demo Hero' lobby and check if the guides have been loaded properly.<br>
					It is important that you select them in-game in the shop interface after you subscribed to them.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow w-50" src="./images/faqs/heroguides.png">`,
};
