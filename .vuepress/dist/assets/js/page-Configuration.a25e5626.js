(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{422:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("h2",{attrs:{id:"setup-supabase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-supabase"}},[e._v("#")]),e._v(" Setup Supabase")]),e._v(" "),a("p",[e._v("You need to create a supabase project on "),a("a",{attrs:{href:"https://supabase.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Supabase"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"#supabase-url"}},[e._v("fill in some information into your "),a("code",[e._v(".env")])]),e._v(".\nAlso you need to create "),a("em",[e._v("two")]),e._v(" tables. For this you can easily click the little terminal icon in the left sidebar of your project. Now create a new query and paste this in:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" channel "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("text")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PRIMARY")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  channel_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("varchar")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("NOT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  crosspost "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("boolean")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("NOT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("NULL")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" guilds "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  guild_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("text")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PRIMARY")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  guild_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("text")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("NOT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("language")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("text")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("NOT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("NULL")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v('Now click on "RUN" and this will automatically create the needed tables and its values.')]),e._v(" "),a("h2",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[e._v("#")]),e._v(" .env")]),e._v(" "),a("p",[e._v("The most important things can be found in the "),a("code",[e._v(".env")]),e._v(" file. This section is explaining what to fill into the file.")]),e._v(" "),a("h5",{attrs:{id:"disclaimer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disclaimer"}},[e._v("#")]),e._v(" Disclaimer")]),e._v(" "),a("p",[e._v("All IDs and Tokens used in this documentation are fake and should not be used even if there weren't fake.")]),e._v(" "),a("h4",{attrs:{id:"example-env-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-env-example"}},[e._v("#")]),e._v(" Example (.env.example)")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TOKEN = # Token of the bot\nCLIENT_ID = # Client/Application ID of the Bot\nERROR_CHANNEL = # ID of the channel the bot should send errors to\nOWNER_ID = # ID of the Owner (sensei) from the bot\nRNDM_API_KEY = # https://some-random-api.ml/docs/welcome/keys\nSUPABASE_URL= # URL of your Supabase project\nSUPABASE_KEY= # Also known as the anon public key\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"what-is-the-expeted-input-for-each-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-expeted-input-for-each-line"}},[e._v("#")]),e._v(" What is the expeted input for each line?")]),e._v(" "),a("h3",{attrs:{id:"token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[e._v("#")]),e._v(" Token")]),e._v(" "),a("p",[a("strong",[e._v("Go to the Discord Developer Portal")])]),e._v(" "),a("p",[e._v("Your first step is to browse over to the "),a("a",{attrs:{href:"https://discordapp.com/developers/applications/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord Developer Portal"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("This portal shows all of your applications and bots.")]),e._v(" "),a("p",[e._v('If you already have a bot created, click it in the list. If you don’t have any discord bots, click the "New Application” button.\n')]),a("hr"),a("p"),e._v(" "),a("p",[a("strong",[e._v("Give Your Bot a Name")])]),e._v(" "),a("p",[e._v("Here you’ll be prompted to give your application (bot) a name.")]),e._v(" "),a("p",[e._v("You can of course just choose "),a("em",[e._v("Kayano")]),e._v(" or maybe try something new.")]),e._v(" "),a("p",[a("strong",[e._v("Retrieve your token")])]),e._v(" "),a("p",[e._v('Your next step is to go over the menu on the left side of the screen and click "Bot”. It’s the icon that looks like a little puzzle piece.')]),e._v(" "),a("p",[e._v('Now you want to click the blue "Add Bot" button')]),e._v(" "),a("p",[e._v('Click the "Yes, do it!” button…')]),e._v(" "),a("p",[e._v('You’ll now see a heading named "Token" and a button to '),a("em",[e._v("copy")]),e._v(" it.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/get-started/token.jpg",alt:"Token"}})]),e._v(" "),a("p",[a("strong",[e._v("Add it to the .env")])]),e._v(" "),a("p",[e._v("Now you can paste your copied token into the "),a("code",[e._v(".env")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin\n[...]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"client-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-id"}},[e._v("#")]),e._v(" Client ID")]),e._v(" "),a("p",[e._v("Also named Application ID is the User ID of the Bot/Application. You can also get this from the "),a("a",{attrs:{href:"https://discordapp.com/developers/applications/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord Developer Portal"),a("OutboundLink")],1),e._v('\nby clicking on your application and under "General Information" click the copy button under the "Application ID".')]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/get-started/app_id.jpg",alt:"Application ID"}})]),e._v(" "),a("p",[e._v("Now you can paste your copied Application ID into the "),a("code",[e._v(".env")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # Last Section\nCLIENT_ID = 874366396261445807 # This Section\n[...]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"error-channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-channel"}},[e._v("#")]),e._v(" Error Channel")]),e._v(" "),a("p",[e._v("This will be the channel ID of the channel all errors should be logged into.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Enable Dev Mode")]),e._v(" "),a("ul",[a("li",[e._v('Go into your "Discord User Settings" > "Advanced" and activate "Developer Mode"\n'),a("img",{attrs:{src:"/images/get-started/dev_mode.jpg",alt:"Application ID"}})])])]),e._v(" "),a("li",[a("p",[e._v("Get Error Channel ID")]),e._v(" "),a("ul",[a("li",[e._v("Right click on the channel your errors should be send to")]),e._v(" "),a("li",[e._v('Click on "Copy ID"')])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/get-started/copy_channel_id.jpg",alt:"Copy Channel ID"}})])])]),e._v(" "),a("p",[e._v("Now you can paste your copied Application ID into the "),a("code",[e._v(".env")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section\nCLIENT_ID = 874366396261445807 # Last Section\nERROR_CHANNEL = 814761725420623374 # This Section\n[...]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"owner-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#owner-id"}},[e._v("#")]),e._v(" Owner ID")]),e._v(" "),a("p",[e._v("This will be the ID of the user who has the power over the bot.")]),e._v(" "),a("ol",[a("li",[e._v("Enable Dev Mode (if you haven't already)\n"),a("ul",[a("li",[e._v("Go into your "),a("em",[e._v("Discord User Settings")]),e._v(" > "),a("em",[e._v("Advanced")]),e._v(" and activate "),a("em",[e._v("Developer Mode")]),e._v(" "),a("img",{attrs:{src:"/images/get-started/dev_mode.jpg",alt:"Application ID"}})])])]),e._v(" "),a("li",[e._v("Get Owner ID\n"),a("ul",[a("li",[e._v("Right click on the owner in Discord (probably yourself)")]),e._v(" "),a("li",[e._v('Click on "Copy ID"')])])])]),e._v(" "),a("p",[e._v("Now you can paste your copied Owner ID into the "),a("code",[e._v(".env")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section\nCLIENT_ID = 874366396261445807 # 2nd Section\nERROR_CHANNEL = 814761725420623374 # Last Section\nOWNER_ID = 751092600890458203 # This Section\n[...]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"some-random-api-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-random-api-key"}},[e._v("#")]),e._v(" Some random API Key")]),e._v(" "),a("p",[e._v('For some commands you need to use a "Some random API" Premium Key. This can be also get for free.\nFor more information '),a("a",{attrs:{href:"https://some-random-api.ml/docs/welcome/keys",target:"_blank",rel:"noopener noreferrer"}},[e._v("go to their documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Now you can paste your key into the "),a("code",[e._v(".env")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section\nCLIENT_ID = 874366396261445807 # 2nd Section\nERROR_CHANNEL = 814761725420623374 # 3rd Section\nOWNER_ID = 751092600890458203 # Last Section\nRNDM_API_KEY = pqzBjOM57rvXyQe6GDfYSDn80 # This Section\n[...]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h3",{attrs:{id:"supabase-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supabase-url"}},[e._v("#")]),e._v(" Supabase URL")]),e._v(" "),a("p",[e._v("In order to connect and interact with the Database you'll need the URL of your project. You can find it under "),a("em",[e._v("Settings > API > Config > URL")]),e._v(".")]),e._v(" "),a("p",[e._v("After you copied this URL you can paste the URL into the "),a("code",[e._v(".env")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section\nCLIENT_ID = 874366396261445807 # 2nd Section\nERROR_CHANNEL = 814761725420623374 # 3rd Section\nOWNER_ID = 751092600890458203 # 4th Section\nRNDM_API_KEY = pqzBjOM57rvXyQe6GDfYSDn80 # Last Section\nSUPABASE_URL = https://rbtwcgjfbywmbwlunhan.supabase.co # This Section\n[...]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h3",{attrs:{id:"supabase-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supabase-key"}},[e._v("#")]),e._v(" Supabase Key")]),e._v(" "),a("p",[e._v("In order to connect and interact with the Database you'll need the URL of your project. You can find it under "),a("em",[e._v("Settings > API > Project API Keys > anon public")]),e._v(".")]),e._v(" "),a("p",[e._v("After you copied this key you can paste the URL into the "),a("code",[e._v(".env")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TOKEN = NTIwNjE5MjExMjQ0Mzc1Mg==.bairNg.bES5TdL9KnWunkZ64sTIE5DwUin # 1st Section\nCLIENT_ID = 874366396261445807 # 2nd Section\nERROR_CHANNEL = 814761725420623374 # 3rd Section\nOWNER_ID = 751092600890458203 # 4th Section\nRNDM_API_KEY = pqzBjOM57rvXyQe6GDfYSDn80 # 5th Section\nSUPABASE_URL = https://rbtwcgjfbywmbwlunhan.supabase.co # Last Section\nSUPABASE_KEY = deJwuahuvOawhodnadkjbakwooIdawbKbBHdwaAkWiA.djwoafhauiwfhaiugdiluofhgzyIZDawhdzi78wdaHjbvALAdhablwvfvlzg.djwaoihfauohwuhdvh8hwihd3uiZudiwaubkCioawd # This Section\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"done"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#done"}},[e._v("#")]),e._v(" Done!")]),e._v(" "),a("p",[e._v("And you're done 🎉 Now your "),a("code",[e._v(".env")]),e._v(" will look something like above.")])])}),[],!1,null,null,null);t.default=n.exports}}]);