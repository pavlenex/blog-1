(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{508:function(e,t,o){"use strict";o.r(t);var a=o(37),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("This blog post might be a bit technical, but I wanted to share what I have been working on the past month, which I think will have great consequences for a number of people, and it might be my biggest contribution for Bitcoin this year. (but only appreciated by those with hands in the dirt keeping your favorite bitcon services online)")]),e._v(" "),o("p",[e._v("I have been working on a little known pillar of BTCPay Server called NBXplorer.")]),e._v(" "),o("p",[e._v("NBXplorer is an infrastructure server called a UTXO tracker. In a nutshell, when you use BTCPay Server, we depend on NBXplorer for getting notifications when a new payment arrives, for showing the balance of your wallet, for creating transactions, and showing transaction history.")]),e._v(" "),o("p",[e._v("While NBXplorer is only one of the brick required by BTCPay Server, some numbers about the update:")]),e._v(" "),o("ul",[o("li",[e._v("-70% of RAM consumption (More if you support more than one chain)")]),e._v(" "),o("li",[e._v("Start immediately")]),e._v(" "),o("li",[e._v("-70% of space requirement")]),e._v(" "),o("li",[e._v("Database can be inspected and queried directly for custom needs.")])]),e._v(" "),o("h1",{attrs:{id:"some-history"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#some-history"}},[e._v("#")]),e._v(" Some history...")]),e._v(" "),o("p",[e._v("NBXplorer got created 5 years ago. It is a project started at DG Lab, as a server for a multi asset wallet based on Elements. (Liquid)\nThis wallet got used in our first BC2 conference in Tokyo.")]),e._v(" "),o("p",[e._v("I decided to then adapt NBXplorer for Bitcoin. The reason about not using Bitcoin Core directly was mainly the lack of flexibility of the API, and the lack of multi tenancy support and decent HD cold wallet support. (It is probably better nowadays)")]),e._v(" "),o("p",[e._v("After making NBXplorer, I built BTCPay Server on top of it, and kept improving it since then. Nowadays, not only all BTCPay Server users, but also a few exchanges and other big businesses rely on this project for internal operations.")]),e._v(" "),o("h1",{attrs:{id:"about-reaching-the-limits"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#about-reaching-the-limits"}},[e._v("#")]),e._v(" About reaching the limits")]),e._v(" "),o("p",[e._v("NBXplorer up to now had a fundamental issue:\nIt relied on a NoSql database called DBreeze. This database project was in a sad state, so 2 years ago, I ended up rewriting it in a project called DBTrie.")]),e._v(" "),o("p",[e._v("Why did I use this rather than postgres in the first place? The idea was that NBXplorer was easier to run as there was no dependency. Build, run bitcoin core, run NBXplorer, done! However...")]),e._v(" "),o("ul",[o("li",[e._v("Making your own database is complicated, and you can't really beat a project that has 20 years old behind and an active community working restlessly behind it.")]),e._v(" "),o("li",[e._v("DBTrie had bugs impacting some big users and causing corruptions. This is a nightmare scenario, not only for the impacted user, but for myself as I need to debug it before problems reach other users.")]),e._v(" "),o("li",[e._v("DBTrie doesn't have tooling which give flexibility to power users to leverage the data stored inside. Nor the flexibility for me to improve a lot the API of NBXplorer.")]),e._v(" "),o("li",[e._v("DBTrie can't share access with multiple apps.")]),e._v(" "),o("li",[e._v("Due to the NoSQL nature of the design of NBXplorer, we needed to keep the chain of block headers in memory, making NBXplorer quite heavy in resource consumption. (200 MB or more per supported crypto)")]),e._v(" "),o("li",[e._v("Because the database was only a store of ordered data, we were calculating the UTXO set of a wallet at every requests to NBXplorer. (if your wallet had an history of 100 000 transactions, it could take 20-30 seconds or more to calculate your balance!)")]),e._v(" "),o("li",[e._v("The more transactions in a wallet, the slower it became. (linearly)")]),e._v(" "),o("li",[e._v("No way to leverage the skills of database administrators to solve common issues companies have.")])]),e._v(" "),o("p",[e._v("Most of you never had any problem, because we don't rely too much on NBXplorer for time sensitive code path in BTCPay Server.\nAlso, if your wallet had less than 30 000 transactions, you might not have noticed any performance issue.")]),e._v(" "),o("p",[e._v("So I decided to focus on fixing all those problems.")]),e._v(" "),o("p",[e._v("Deleted twitter from my phone, banned it from my local network, closed myself in the coding cave for a month.\nI probably didn't even touch one line of BTCPay Server since this post for the whole month.")]),e._v(" "),o("h1",{attrs:{id:"about-breaking-the-limits"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#about-breaking-the-limits"}},[e._v("#")]),e._v(" About breaking the limits")]),e._v(" "),o("p",[e._v("I decided to migrate NBXplorer on Postgres, taking advantage of good old SQL.\nLot's of the logic that was inside NBXplorer code got pushed in SQL, the schema is "),o("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Schema.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("well documented"),o("OutboundLink")],1),e._v(" and efficient, it provides easy queries to the DB for getting balances, UTXOS, see recent activity of a wallet, build histograms, and create activity reports.")]),e._v(" "),o("p",[e._v("I encourage people to use the schema while making their own indexer.")]),e._v(" "),o("p",[e._v("NBXplorer at the current version isn't exposing the full power of what the schema allows.\nThe schema is multi chain, multi asset and multi-tenant.")]),e._v(" "),o("figure",[o("img",{attrs:{src:"/images/nxplorer-schema.png",alt:""}})]),e._v(" "),o("p",[e._v("You are encouraged to create your own APIs on top of it if you need it.")]),e._v(" "),o("p",[e._v("It allows the creation of wallets, into which you can add output descriptors and/or individual addresses (scripts).")]),e._v(" "),o("p",[e._v("Wallets can also be nested into each others. Imagine you run a business with multiple stores, you could have one wallet by stores, then nest them inside the business wallet.")]),e._v(" "),o("p",[e._v("You can then easily query wallet's utxos, balance, recent changes, make histograms of how wallet balance at any level evolve over time.")]),e._v(" "),o("p",[e._v("As always, NBXplorer isn't indexing the whole blockchain: Only transactions involving a scriptpubkey in the scripts table. It means it can run without lot's of storage and memory requirement.")]),e._v(" "),o("p",[e._v("While NBXplorer run on the database, you can also query and interact with the schema directly by creating wallets and your own descriptors.")]),e._v(" "),o("p",[e._v("For all of this, you also now need only around 60MB of RAM to run NBXplorer (instead of 200MB+ per supported chain, that's around -70% of memory consumption at minimum), fast start (no more defragmenting process taking long time when the server restart, no need to load the chain of header either...), and more efficiency on storage space: around -70% less space is required to store the data of NBXplorer.")]),e._v(" "),o("h1",{attrs:{id:"migration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migration"}},[e._v("#")]),e._v(" Migration")]),e._v(" "),o("p",[e._v("I work hard to prevent breaking changes and give lot's of warning and time for people to update.\nSo I created a migration path for our current users. If you use BTCPay on docker, you don't have to worry, the migration will be automatic during one update. You may notice NBXplorer isn't starting for some time.")]),e._v(" "),o("ul",[o("li",[e._v("For most of our users, the update will be fast, no more than a 1-5 minutes.")]),e._v(" "),o("li",[e._v("The migration for the mainnet demo server online since september 2018 is taking around 1H and has only around 44K transactions and 620K addresses.")]),e._v(" "),o("li",[e._v("For a few big users (exchanges and big businesses), I expect the migration to take a few more hours.")])]),e._v(" "),o("p",[e._v("You can see more information on "),o("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Migration.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBXplorer's migration documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Note that the migration isn't mandatory. The old backend will be deprecated but supported for few years. (SPOILER) But you will miss new BTCPay Server features such as the upcoming dashboards. (SPOILER)")]),e._v(" "),o("h1",{attrs:{id:"future-plans"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#future-plans"}},[e._v("#")]),e._v(" Future plans")]),e._v(" "),o("p",[e._v("I will deprecate the DBTrie backend, showing warning for users not running on Postgres. But I will keep supporting it for 2 or 3 years.")]),e._v(" "),o("p",[e._v("The current NBXplorer API is stable and will not change significantly.\nI plan to create a completely new API for NBXplorer taking full advantage of the new schema.")]),e._v(" "),o("p",[e._v("The new API will run on the same database, and I plan to make it possible to run both API at the same time on the same database to be able to slowly migrate.")]),e._v(" "),o("p",[e._v("But you don't have to wait for it! It's only SQL, leverage your database skills and develop in the language you know best. (See more information about the scheme on "),o("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Schema.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBXplorer's schema documentation"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("h1",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),o("p",[e._v("NBXplorer improved significantly. And I expect it will become a pillar not only to BTCPay Server but to many other services.")]),e._v(" "),o("p",[e._v("We will use the improvements to NBXplorer to provide exciting analytics queries over your store's wallet in BTCPay Server. No matter how big your store is, it will smoothly work.")]),e._v(" "),o("p",[e._v("Will you use NBXPlorer's API, or just query the tables directly? The choice is yours, now there is enough flexibility for any of your demands.")]),e._v(" "),o("p",[e._v("Links:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Schema.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schema documentation"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Migration.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Migration documentation"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);