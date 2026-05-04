// Curated from the official Sanguosha Mobile hero list.
// Pool scope: about top 100 Doudizhu-environment high-strength heroes plus requested additions, refreshed 2026-05-03.
// HP values are parsed from BWIKI classic hero pages where available and supplemented from Sanguosha Wiki/Fandom for pages blocked during refresh.
// hp is initial HP. hpMax is only included when it differs from hp. armor is only included for nonzero starting armor.
// images and thumb point to repository-local assets under assets/heroes/.
window.SANGUOSHA_HEROES = [
  {
    "id": 492,
    "name": "界·沮授",
    "faction": "群",
    "factionClass": "qun",
    "hp": "2",
    "hpMax": "3",
    "armor": "3",
    "image": "assets/heroes/492-界-沮授-skin-01-bc79a757e7.jpg",
    "thumb": "assets/heroes/492-界-沮授-thumb-06f59c3d82.jpg",
    "intro": "沮[jǔ]授，袁绍帐下谋士。史载他“少有大志，擅于谋略”。曾为冀州别驾，举茂才，并当过两次县令。后来又当韩馥[fù]别驾，被韩馥[fù]表为骑都尉。袁绍占据冀州后任用沮授为从事。经常对袁绍提出良策，但很多时候袁绍并不听从。官渡之战时袁绍大败，沮授未及逃走，被曹操所获，因拒降被曹操处死。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-492.html",
    "skills": [
      [
        "渐营",
        "当你于出牌阶段使用牌时，若此牌与你于此阶段使用的上一张牌花色或点数相同，则你可以摸一张牌。出牌阶段限一次，你可以将一张牌当做任意一张基本牌使用，若你于本阶段使用的上一张牌有花色，则此牌的花色视为与上一张牌的花色相同。"
      ],
      [
        "矢北",
        "锁定技，当你受到伤害后：若此伤害是你本回合第一次受到伤害，则你回复1点体力；若不是你本回合第一次受到伤害，则你失去1点体力。"
      ]
    ],
    "images": [
      "assets/heroes/492-界-沮授-skin-01-bc79a757e7.jpg",
      "assets/heroes/492-界-沮授-skin-02-d08e738a0e.jpg",
      "assets/heroes/492-界-沮授-skin-03-0ea2befbfe.jpg",
      "assets/heroes/492-界-沮授-skin-04-38c00a3795.jpg",
      "assets/heroes/492-界-沮授-skin-05-6016da1c33.jpg"
    ]
  },
  {
    "id": 356,
    "name": "界·徐盛",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/356-界-徐盛-skin-01-03d2340922.jpg",
    "thumb": "assets/heroes/356-界-徐盛-thumb-ea2f76ace7.png",
    "intro": "字文向，琅邪[láng yá]莒[jǔ]县人。三国时期吴将。徐盛最初因讨伐山贼有功而被加为中郎将，后于濡须口之战中表现出色，得到孙权的赞赏。魏文帝曹丕伐吴时，徐盛以疑城之计退去魏军。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-356.html",
    "skills": [
      [
        "破军",
        "当你使用【杀】指定一个目标后，你可以发动此技能，将其至多X张牌扣置于该角色的武将牌旁（X为其体力值）；若如此做，当前回合结束后，该角色获得这些牌。你使用【杀】对手牌数与装备数均不大于你的角色造成伤害时，此伤害+1。"
      ]
    ],
    "images": [
      "assets/heroes/356-界-徐盛-skin-01-03d2340922.jpg",
      "assets/heroes/356-界-徐盛-skin-02-e70496436a.jpg",
      "assets/heroes/356-界-徐盛-skin-03-ae2073d87b.jpg",
      "assets/heroes/356-界-徐盛-skin-04-13ec9d155e.jpg",
      "assets/heroes/356-界-徐盛-skin-05-ed9f9fd528.jpg"
    ]
  },
  {
    "id": 336,
    "name": "神郭嘉",
    "faction": "神",
    "factionClass": "shen",
    "hp": "3",
    "image": "assets/heroes/336-神郭嘉-skin-01-e3e9a5420d.jpg",
    "thumb": "assets/heroes/336-神郭嘉-thumb-917ddbf4d5.png",
    "intro": "郭嘉（170年－207年），字奉孝，颍川阳翟（今河南禹州）人。东汉末年曹操帐下著名谋士。 郭嘉出身颍川郭氏。原为袁绍部下，后转投曹操，为曹操统一中国北方立下了功勋，官至军师祭酒，封洧阳亭侯。在曹操征伐乌丸时病逝，年仅三十八岁。谥号贞侯。 史书上称他“才策谋略，世之奇士”。曹操称赞他见识过人，是自己的“奇佐”。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-336.html",
    "skills": [
      [
        "慧识",
        "出牌阶段限一次，若你体力上限小于10，你可进行一次判定：若判定结果与本阶段内以此法进行判定的判定结果花色均不相同，且此时你体力上限小于10，你可以重复此判定并增加1点体力上限。然后你可以将所有生效的判定牌交给任意一名角色。然后若其手牌数为全场最多，你减少1点体力上限。"
      ],
      [
        "天翊",
        "天翊[yì]，觉醒技，准备阶段，若所有存活的角色在本局游戏内均受到过伤害，你增加2点体力上限，回复1点体力，然后令一名角色获得技能“佐幸※”。佐幸：回合开始时，若神郭嘉的体力上限大于1，你可以令其减少1点体力上限，若如此做，本回合的出牌阶段限一次，你可以视为使用一张普通锦囊牌。"
      ],
      [
        "辉逝",
        "限定技，出牌阶段，你可选择一名角色：若其有未触发的觉醒技，且你体力上限不小于X(X为场上存活人数)，则你选择其中一个觉醒技，其视为已满足觉醒条件；否则其摸四张牌。若如此做，你减少2点体力上限。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E9%83%AD%E5%98%89",
    "images": [
      "assets/heroes/336-神郭嘉-skin-01-e3e9a5420d.jpg",
      "assets/heroes/336-神郭嘉-skin-02-8b40db09b4.jpg"
    ]
  },
  {
    "id": 439,
    "name": "孙寒华",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "3",
    "image": "assets/heroes/439-孙寒华-skin-01-5d0ed9e020.jpg",
    "thumb": "assets/heroes/439-孙寒华-thumb-aeb3f38419.png",
    "intro": "孙寒华，三国时女仙，其父孙贲为孙权堂兄，寒华少时与杜契有私情，后从杜契受玄白之要，颜容日少。周旋吴越诸山十馀年，得道仙去。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-439.html",
    "skills": [
      [
        "冲虚",
        "出牌阶段限一次，你可以进行一次\"集灵\"来获得分数，然后你可以用分数来升级“妙剑”、升级“莲华”或摸牌。"
      ],
      [
        "妙剑",
        "1级，出牌阶段限一次，你可以将一张【杀】当做【刺杀】使用，或将一张锦囊牌当做【无中生有】使用；2级，出牌阶段限一次，你可以将一张基本牌当做【刺杀】使用，或将一张非基本牌当做【无中生有】使用；3级，出牌阶段限一次，你可以视为使用了一张【刺杀】或视为使用了一张【无中生有】。"
      ],
      [
        "莲华",
        "1级，你成为其他角色使用【杀】的目标时，你摸一张牌。2级，你成为其他角色使用【杀】的目标时，你摸一张牌，然后进行一次判定，若判定结果为黑桃，则取消之。3级，你成为其他角色使用【杀】的目标时，你摸一张牌，除非该角色弃置一张牌，否则取消之。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E5%AD%99%E5%AF%92%E5%8D%8E",
    "images": [
      "assets/heroes/439-孙寒华-skin-01-5d0ed9e020.jpg"
    ]
  },
  {
    "id": 584,
    "name": "曹髦",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/584-曹髦-skin-01-1d4bbd080a.jpg",
    "thumb": "assets/heroes/584-曹髦-thumb-f12439521a.png",
    "intro": "曹髦（241年11月15日－260年6月2日）， 字彦士，沛国谯县（今安徽省亳州市）人，魏文帝曹丕之孙，东海王曹霖之子，曹魏第四位皇帝。曹髦少而好学，即位后曾多次幸太学，向诸儒问学。在与诸儒讨论《易》《尚书》《礼记》等经典时，屡屡表达自己的政治理想。正元二年（255年），司马师去世，其弟司马昭执政。随年龄增长，曹髦渐不满司马昭擅权，欲以武力铲除司马氏，恢复皇权。甘露五年（260年）五月，召集侍中王沈、尚书王经、散骑常侍王业等商议，慷慨陈词：“司马昭之心，路人所知也。吾不能坐受废辱，今日当与卿等自出讨之。”王沈、王业奔告司马昭，司马昭调兵以备。曹髦亲率卫士、奴仆数百人，擂鼓往攻司马昭，途中与司马昭心腹贾充所率军队相遇交战，曹髦身先士卒，被太子舍人成济所杀。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-584.html",
    "skills": [
      [
        "潜龙",
        "潜龙：持恒技。游戏开始时，你获得20点道心值。如下情况时，你对应获得一定数量的“道心”值：1.你受到1点伤害后——10点；2.你造成1点伤害后——15点；3.你获得牌时——5点。你根据道心值视为拥有如下技能：25点-清正；50点-酒诗；75点-放逐；99点-决进。你的道心值上限为99。清正：持恒技。出牌阶段开始时，你可以弃置手牌中一种花色的所有牌，观看一名其他角色的手牌并弃置其中一种花色的所有牌，若弃置该角色的牌少于弃置你的牌，你对其造成1点伤害。酒诗：持恒技。当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌背面向上，且你未因此次伤害发动过“酒诗”，你可以翻面。当你翻面时，你随机获得牌堆中的一张锦囊牌。放逐：持恒技。出牌阶段限一次，你可以选择一项令一名其他角色执行（不能选与上次选择相同目标）：1.直到其下个回合结束时，其不能使用锦囊牌外的手牌；2.直到其下个回合结束时，其技能失效。决进：持恒技。限定技。出牌阶段，你可令所有角色依次调整体力值为1并获得x点护甲（x为其因调整减少的体力值，你因此法获得的护甲值额外+2点），令场上获得“向死存魏”光环效果;将牌堆、弃牌堆、场上、所有角色手牌中的【酒】、【桃】、【闪】移出游戏。"
      ],
      [
        "卫统",
        "持恒技。主公技。游戏开始时，若场上有其他魏势力角色且你拥有“潜龙”，则你因“潜龙”于游戏开始时获得的道心值修改为60点。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E6%9B%B9%E9%AB%A6",
    "images": [
      "assets/heroes/584-曹髦-skin-01-1d4bbd080a.jpg"
    ]
  },
  {
    "id": 566,
    "name": "阎象",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/566-阎象-skin-01-d866d3e363.jpg",
    "thumb": "assets/heroes/566-阎象-thumb-d5a7ea269e.jpg",
    "intro": "阎象，东汉末期人物，袁术的主簿。献帝兴平二年（195），手执玉玺的袁术要称帝时，问于部下，只有阎象引用周文王虽拥有三分之二的天下还向殷称臣的故事进行劝谏。却未被采纳。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-566.html",
    "skills": [
      [
        "苦谏",
        "出牌阶段限一次，你可以将至多两张手牌标记为“谏”并交给一名其他角色。当其他角色使用或打出“谏”牌时，你与其各摸一张牌。当其他角色非因使用或打出从手牌区失去“谏”牌时，你与其各弃置一张牌。"
      ],
      [
        "睿敛",
        "每轮开始时，你可以选择一名角色，该角色接下来的一个回合结束时，若其此回合弃置的牌数不小于1，你可以选择一种类型（其本回合须弃置过此类型的牌），然后你与该角色依次从弃牌堆中随机获得一张此类型的牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E9%98%8E%E8%B1%A1",
    "images": [
      "assets/heroes/566-阎象-skin-01-d866d3e363.jpg"
    ]
  },
  {
    "id": 430,
    "name": "蒋钦",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/430-蒋钦-skin-01-7ee45edb41.jpg",
    "thumb": "assets/heroes/430-蒋钦-thumb-cd4ab4cdf5.png",
    "intro": "蒋钦（？－220年），字公奕，汉末东吴名将，早年随孙策平定丹阳、吴郡、会稽和豫章四郡。平盗贼，迁西部都尉。讨会稽贼吕合、秦狼等，徙讨越中郎将。又与贺齐并力讨平黟贼。从征合肥，因功迁荡寇将军，领濡须督，后召还都拜右护军，典领辞讼。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-430.html",
    "skills": [
      [
        "俭衣",
        "锁定技，其他角色的回合结束后，若本回合有防具牌被弃置，且此牌仍在弃牌堆中，则你选择其中一张获得之。"
      ],
      [
        "尚义",
        "出牌阶段限一次，你可以弃置一张牌并选择一名有手牌的其他角色，令其查看你的手牌，然后你查看其手牌并获得其中一张。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%92%8B%E9%92%A6",
    "images": [
      "assets/heroes/430-蒋钦-skin-01-7ee45edb41.jpg",
      "assets/heroes/430-蒋钦-skin-02-9af5464b68.jpg"
    ]
  },
  {
    "id": 377,
    "name": "星·徐晃",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/377-星-徐晃-skin-01-382fa765ce.jpg",
    "thumb": "assets/heroes/377-星-徐晃-thumb-39b01c52b8.png",
    "intro": "字公明，河东杨人。三国时期曹魏名将，本为杨奉帐下骑都尉，杨奉被曹操击败后转投曹操，在曹操手下多立功勋，参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-377.html",
    "skills": [
      [
        "治严",
        "出牌阶段各限一次，你可以选择一项执行对应效果：1.将手牌数摸至体力上限，然后直至本阶段结束时不能对其他角色使用牌；2.将x张手牌交给一名其他角色(x为你的手牌数减去体力值)。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E6%98%9F%E5%BE%90%E6%99%83",
    "images": [
      "assets/heroes/377-星-徐晃-skin-01-382fa765ce.jpg",
      "assets/heroes/377-星-徐晃-skin-02-d3e9d6b418.jpg"
    ]
  },
  {
    "id": 89,
    "name": "马良",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "3",
    "image": "assets/heroes/89-马良-skin-01-3ab9c268de.jpg",
    "thumb": "assets/heroes/89-马良-thumb-c149569e91.jpg",
    "intro": "字季常，因眉毛中有白毛，人称白眉马良，马谡的兄长。马良在兄弟五人中名声最佳，因此有“马氏五常，白眉最良”的说法。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-89.html",
    "skills": [
      [
        "自书",
        "锁定技，你的回合外，你获得的牌均会在当前角色回合结束时置入弃牌堆；你的回合内，当你不因此技能效果获得牌时，摸一张牌。"
      ],
      [
        "应援",
        "当你于回合内使用的牌置入弃牌堆后，你可以将之交给一名其他角色（相同牌名的牌每回合限一次）。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E9%A9%AC%E8%89%AF",
    "images": [
      "assets/heroes/89-马良-skin-01-3ab9c268de.jpg",
      "assets/heroes/89-马良-skin-02-c7e02926a2.jpg",
      "assets/heroes/89-马良-skin-03-1d10c9f650.jpg"
    ]
  },
  {
    "id": 142,
    "name": "神诸葛亮",
    "faction": "神",
    "factionClass": "shen",
    "hp": "3",
    "image": "assets/heroes/142-神诸葛亮-skin-01-59c73b6fe0.jpg",
    "thumb": "assets/heroes/142-神诸葛亮-thumb-7998f0d283.jpg",
    "intro": "字孔明、号卧龙，汉族，琅琊[láng yá]阳都人，三国时期蜀汉丞相、杰出的政治家、军事家、发明家、文学家。在世时被封为武乡侯，死后追谥忠武侯，后来东晋政权推崇诸葛亮军事才能，特追封他为武兴王。诸葛亮为匡扶蜀汉政权，呕心沥血、鞠躬尽瘁、死而后已。其代表作有《前出师表》、《后出师表》、《诫子书》等。曾发明木牛流马等，并改造连弩，可一弩十矢俱发。于234年在宝鸡五丈原逝世。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-142.html",
    "skills": [
      [
        "七星",
        "游戏开始时，你将牌堆顶的七张牌扣置于你的武将牌上，称为“星”，然后你可以用任意张手牌替换等量的“星”；摸牌阶段结束时，你可以用任意张手牌替换等量的“星”。"
      ],
      [
        "狂风",
        "结束阶段，你可以移去一张\"星\"并选择一名角色，然后直到你的下回合开始之前，当该角色受到火焰伤害时，此伤害+1。"
      ],
      [
        "大雾",
        "结束阶段，你可以移去任意张\"星\"并选择等量的角色，然后直到你的下回合开始之前，当这些角色受到非雷电伤害时，防止此伤害。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E8%AF%B8%E8%91%9B%E4%BA%AE",
    "images": [
      "assets/heroes/142-神诸葛亮-skin-01-59c73b6fe0.jpg",
      "assets/heroes/142-神诸葛亮-skin-02-19be48c479.jpg",
      "assets/heroes/142-神诸葛亮-skin-03-c32b550bb3.jpg",
      "assets/heroes/142-神诸葛亮-skin-04-0247f102ed.jpg"
    ]
  },
  {
    "id": 384,
    "name": "界·满宠",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/384-界-满宠-skin-01-5300c72830.jpg",
    "thumb": "assets/heroes/384-界-满宠-thumb-dfeabaf3ae.png",
    "intro": "初在曹操手下任许县县令，掌管司法，以执法严格著称；转任汝南太守，开始参与军事，曾参与赤壁之战。后关羽围攻樊城，满宠协助曹仁守城，劝阻了弃城而逃的计划，成功坚持到援军到来。曹丕在位期间，满宠驻扎在新野，负责荆州侧的对吴作战。曹叡[ruì]在位期间，满宠转任到扬州，接替曹休负责东侧对吴作战，屡有功劳。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-384.html",
    "skills": [
      [
        "峻刑",
        "出牌阶段限一次，你可以弃置任意张手牌并选择一名其他角色，然后令其选择一项：1.弃置等量牌并失去1点体力；2.翻面，然后摸等量的牌。"
      ],
      [
        "御策",
        "当你受到伤害后，你可以展示一张手牌。若如此做，除非伤害来源弃置与你展示的牌类别不同的一张手牌，否则你回复1点体力。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%95%8C%E6%BB%A1%E5%AE%A0",
    "images": [
      "assets/heroes/384-界-满宠-skin-01-5300c72830.jpg",
      "assets/heroes/384-界-满宠-skin-02-6bc5dda640.jpg",
      "assets/heroes/384-界-满宠-skin-03-e0222cb6eb.jpg",
      "assets/heroes/384-界-满宠-skin-04-c528aa2679.jpg"
    ]
  },
  {
    "id": 235,
    "name": "界·孙权",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/235-界-孙权-skin-01-5b71cec4b9.jpg",
    "thumb": "assets/heroes/235-界-孙权-thumb-69bd73108e.jpg",
    "intro": "吴大帝，字仲谋，吴郡富春县人。统领吴与蜀魏三足鼎立，制衡天下。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-235.html",
    "skills": [
      [
        "制衡",
        "出牌阶段限一次，你可以弃置任意张牌，然后摸等量的牌。若你以此法弃置了所有的手牌，则额外摸一张牌。"
      ],
      [
        "救援",
        "主公技，其他吴势力角色对其自己使用【桃】时，若其体力值大于你，则该角色可以改为令你回复1点体力，然后其摸一张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%95%8C%E5%AD%99%E6%9D%83",
    "images": [
      "assets/heroes/235-界-孙权-skin-01-5b71cec4b9.jpg",
      "assets/heroes/235-界-孙权-skin-02-9553d9da7a.jpg",
      "assets/heroes/235-界-孙权-skin-03-5103e5aaa2.jpg",
      "assets/heroes/235-界-孙权-skin-04-dc2fb65101.jpg",
      "assets/heroes/235-界-孙权-skin-05-cc0a0a02e6.jpg",
      "assets/heroes/235-界-孙权-skin-06-80d9a82158.jpg",
      "assets/heroes/235-界-孙权-skin-07-dc3ee0dcf9.jpg",
      "assets/heroes/235-界-孙权-skin-08-b643889fa3.jpg",
      "assets/heroes/235-界-孙权-skin-09-98a766a7f6.jpg",
      "assets/heroes/235-界-孙权-skin-10-7540182158.jpg"
    ]
  },
  {
    "id": 344,
    "name": "张绣",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/344-张绣-skin-01-c3ce05fce1.jpg",
    "thumb": "assets/heroes/344-张绣-thumb-b7bf8625bc.png",
    "intro": "张绣（？—207年），武威郡祖厉（今甘肃靖远县）人也。骠骑将军张济的从子。东汉末年割据宛城的军阀，汉末群雄之一。曹魏时期，与段煨、贾诩、明元郭氏皇后是同乡，也是凉州豪族集团的代表人物。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-344.html",
    "skills": [
      [
        "雄乱",
        "限定技，出牌阶段，你可以废除你的判定区和装备区，然后指定一名其他角色，直到回合结束，你对其使用牌无距离和次数限制，其不能使用和打出手牌。"
      ],
      [
        "从谏",
        "当你成为锦囊牌的目标时，若此牌的目标数大于1，则你可以交给一名其他目标角色一张牌，然后摸一张牌。若你给出的牌是装备牌，改为摸两张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E5%BC%A0%E7%BB%A3",
    "images": [
      "assets/heroes/344-张绣-skin-01-c3ce05fce1.jpg",
      "assets/heroes/344-张绣-skin-02-a0163359e5.jpg"
    ]
  },
  {
    "id": 454,
    "name": "谋·张飞",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "4",
    "image": "assets/heroes/454-谋-张飞-skin-01-95761ab3d2.jpg",
    "thumb": "assets/heroes/454-谋-张飞-thumb-251b0e8fd7.png",
    "intro": "字翼德，涿郡人，燕颌虎须，豹头环眼。有诗云:“长坂坡头杀气生，横枪立马眼圆睁。一声好似轰雷震，独退曹家百万兵。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-454.html",
    "skills": [
      [
        "咆哮",
        "使用【杀】无次数限制，若装备了武器【杀】则无距离限制，本回合使用第一张杀后，杀伤能力大幅提高，若目标未死亡，则你会受到惩罚"
      ],
      [
        "协击",
        "若你与一名角色完成协力，则对至多三名角色使用一张普通【杀】，然后摸等同于造成伤害值的牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%BC%A0%E9%A3%9E",
    "images": [
      "assets/heroes/454-谋-张飞-skin-01-95761ab3d2.jpg"
    ]
  },
  {
    "id": 589,
    "name": "谋·韩当",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/589-谋-韩当-skin-01-69273986a8.jpg",
    "thumb": "assets/heroes/589-谋-韩当-thumb-daa78ab78c.jpg",
    "intro": "字义公，辽西令支（今河北迁安）人，吴国将领。韩当因为长于弓箭、骑术并且膂[lǚ]力过人而被孙坚赏识，追随他四处征伐周旋，数次冒险犯难，攻陷敌人、擒拿俘虏。对江东基业的逐渐稳固和吴国的建立有着重要影响。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-589.html",
    "skills": [
      [
        "弓骑",
        "你的攻击范围+4。出牌阶段开始时，你可弃一张牌，若如此做，则此阶段你使用的牌其他角色只能使用或打出虚拟牌或与你弃置牌颜色相同的手牌响应。"
      ],
      [
        "解烦",
        "出牌阶段限一次，你可指定一名角色，令其选择一项：1.攻击范围内含有其的角色依次弃一张牌;2.其摸此时攻击范围内有其的角色数的牌；背水：此技能失效直至你杀死一名角色。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E9%9F%A9%E5%BD%93",
    "images": [
      "assets/heroes/589-谋-韩当-skin-01-69273986a8.jpg"
    ]
  },
  {
    "id": 426,
    "name": "高览",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/426-高览-skin-01-76c5866537.jpg",
    "thumb": "assets/heroes/426-高览-thumb-54ecb42190.png",
    "intro": "本属袁绍部将，与颜良、文丑、张郃被后世并称为“河北四庭柱”。官渡之战中，淳于琼被曹操击破，高览与张郃一同投降曹操。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-426.html",
    "skills": [
      [
        "峻攻",
        "出牌阶段，你可以选择一项：1. 弃置X+1张牌；2. 流失X+1点体力（X为你本回合已发动“峻攻”的次数）。若如此做，你视为对一名其他角色使用一张不受次数和距离限制的普通 【杀】。若此【杀】造成伤害，则此技能失效，直到回合结束。"
      ],
      [
        "等力",
        "当你使用【杀】指定其他角色为目标时或当你成为其他角色使用的【杀】的目标时，若你与其体力值相等，则你可以摸一张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E9%AB%98%E8%A7%88",
    "images": [
      "assets/heroes/426-高览-skin-01-76c5866537.jpg"
    ]
  },
  {
    "id": 601,
    "name": "星·董卓",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/601-星-董卓-skin-01-21c76450a2.jpg",
    "thumb": "assets/heroes/601-星-董卓-thumb-672cb6c1ee.png",
    "intro": "字仲颖，陇西临洮[táo] 人。东汉末年少帝、献帝时权臣，西凉军阀。官至太师、郿[méi]侯。其为人残忍嗜杀，倒行逆施，招致群雄联合讨伐，但联合军在董卓迁都长安不久后瓦解。后被其亲信吕布所杀。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-601.html",
    "skills": [
      [
        "雄进",
        "出牌阶段开始时（每轮限一次），你可以摸X张牌（X为你已损失的体力值，至少为1且至多为3），然后本回合的弃牌阶段开始时，你弃置所有非基本牌；其他角色的出牌阶段开始时（每轮限一次），你可以令其摸X张牌，然后本回合的弃牌阶段开始时，其弃置所有基本牌。"
      ],
      [
        "镇边",
        "锁定技。你的手牌上限等于你的体力上限。当有牌不因使用置入弃牌堆时，你记录这些牌的花色，然后若你记录了四种花色且体力上限小于8，你清除记录的花色并加1点体力上限。"
      ],
      [
        "暴袭",
        "每轮各限一次。当一次性至少两张基本牌进入弃牌堆后，你可以减1点体力上限，将一张手牌当【决斗】使用。当一次性至少两张非基本牌进入弃牌堆后，你可以减1点体力上限，将一张手牌当不计入次数且无次数限制的【杀】使用。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E6%98%9F%E8%91%A3%E5%8D%93",
    "images": [
      "assets/heroes/601-星-董卓-skin-01-21c76450a2.jpg"
    ]
  },
  {
    "id": 437,
    "name": "毛玠",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/437-毛玠-skin-01-d5af580ccd.jpg",
    "thumb": "assets/heroes/437-毛玠-thumb-d5313952bd.png",
    "intro": "毛玠[jiè]字孝先，陈留平丘（今河南封丘）人。东汉末年大臣。投靠曹操后，向曹操提出“奉天子以令不臣，脩耕植，畜军资”的战略规划，得到曹操的欣赏。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-437.html",
    "skills": [
      [
        "秉清",
        "你于出牌阶段内使用牌结算结束后，若此牌与你此阶段使用并结算完毕的所有牌的花色均不相同，则记录此牌花色，然后根据记录的花色数，你可以执行对应效果： 两种：令一名角色摸两张牌； 三种：弃置一名角色区域内的一张牌； 四种：对一名其他角色造成1点伤害。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E6%AF%9B%E7%8E%A0",
    "images": [
      "assets/heroes/437-毛玠-skin-01-d5af580ccd.jpg"
    ]
  },
  {
    "id": 427,
    "name": "马元义",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/427-马元义-skin-01-3cdc854168.jpg",
    "thumb": "assets/heroes/427-马元义-thumb-18420a26c5.png",
    "intro": "东汉末年黄巾之乱的组织者之一，是黄巾大方首领，奉黄巾军首领张角之命，筹划起事的准备工作。后因张角弟子唐周告密而被捕，送往洛阳车裂。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-427.html",
    "skills": [
      [
        "集兵",
        "摸牌阶段开始时，若你拥有少于X张兵（X为场上势力数），则你可以改为将牌堆顶两张牌置于你的武将牌上，称为“兵”。你可以将一张“兵”当做普通【杀】或【闪】使用或打出。"
      ],
      [
        "往京",
        "锁定技，当你发动“集兵”使用或打出一张“兵”牌时，若对方是场上体力值最高的角色，你摸一张牌。"
      ],
      [
        "谋篡",
        "觉醒技，准备阶段，若你拥有至少X张“兵”（X为场上势力数），你减少1点体力值上限，然后获得技能“兵祸※”。兵祸：每回合结束时，若你本回合发动过“集兵”使用或打出牌，你可以令一名角色进行判定，若结果为黑色，你对其造成1点雷电伤害。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E9%A9%AC%E5%85%83%E4%B9%89",
    "images": [
      "assets/heroes/427-马元义-skin-01-3cdc854168.jpg"
    ]
  },
  {
    "id": 567,
    "name": "星·周不疑",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/567-星-周不疑-skin-01-004fb05948.jpg",
    "thumb": "assets/heroes/567-星-周不疑-thumb-ae9d37760f.png",
    "intro": "字元直（或作“文直”），零陵重安（今湖南衡阳县）人，刘表别驾刘先的外甥，少有异才，聪明敏达，在十七岁时就著有文论四首。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-567.html",
    "skills": [
      [
        "慧夭",
        "慧夭：出牌阶段限一次，你可以受到1点无来源伤害。若如此做，你须选择一名其他角色，令其视为对另一名你选择的角色造成过1点伤害。"
      ],
      [
        "雀颂",
        "雀颂：一名角色的结束阶段，若你于此回合内受到过伤害，则你可令一名角色选择一项执行：1、摸三张牌并复原武将牌（若其装备区的牌数不小于3，则摸牌数修改为2）； 2、回复1点体力。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E6%98%9F%E5%91%A8%E4%B8%8D%E7%96%91",
    "images": [
      "assets/heroes/567-星-周不疑-skin-01-004fb05948.jpg"
    ]
  },
  {
    "id": 258,
    "name": "马钧",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/258-马钧-skin-01-da08eb8be5.jpg",
    "thumb": "assets/heroes/258-马钧-thumb-3ef121dce4.jpg",
    "intro": "字德衡，三国曹魏扶风（今陕西兴平县）人，机械制造家。 中国历史上著名的发明家，因为在传动机械方面造诣很深，有天下之名巧的美誉。善于发明机械、武器。曾奉命监督崇华殿的建造。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-258.html",
    "skills": [
      [
        "精械",
        "出牌阶段，你可以展示你手牌区或装备区里的一张防具牌或【诸葛连弩】，然后将此牌的牌名和技能分别做修改。 当你进入濒死状态时，你可以重铸一张防具牌。若如此做，你将你的体力值回复至1点。 诸葛连弩→元戎精械弩：攻击范围3，你使用【杀】无次数限制。 八卦阵→先天八卦阵：每当你需要使用或打出一张【闪】时，你可以进行一次判定：若判定结果不为黑桃，则视为你使用或打出了一张【闪】。 仁王盾→仁王金刚盾：锁定技，黑色【杀】及红桃【杀】对你无效 白银狮子→照月狮子盔：锁定技，当你受到伤害时，若此伤害多于1点，则防止多余的伤害；当你失去装备区里的【白银狮子】时，你回复1点体力，然后摸两张牌。 藤甲→桐油百韧甲：【南蛮入侵】、【万箭齐发】和普通【杀】对你无效；你每次受到火焰伤害时，该伤害+1；当你进入连环状态前，你防止此次操作。"
      ],
      [
        "巧思",
        "出牌阶段限一次，你可以表演“水转百戏图”来赢取相应的牌，然后你选择一项：弃置等量的牌，或将等量的牌交给一名其他角色。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E9%A9%AC%E9%92%A7",
    "images": [
      "assets/heroes/258-马钧-skin-01-da08eb8be5.jpg",
      "assets/heroes/258-马钧-skin-02-f12948a96d.jpg",
      "assets/heroes/258-马钧-skin-03-8b414bacdf.jpg"
    ]
  },
  {
    "id": 359,
    "name": "杨彪",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/359-杨彪-skin-01-36e4d3f7ef.jpg",
    "thumb": "assets/heroes/359-杨彪-thumb-8a881503bb.png",
    "intro": "杨彪，字文先。东汉末年名臣，太尉杨赐之子、名士杨修之父。杨彪少年时受家学熏陶，为人有才学的同时还有高洁的品质，早年就累任侍中、五官中郎将、卫尉等职。汉献帝时更是遍历三公(司空、司徒、太尉)之职。其为人一生向汉，权臣董卓意图迁都时，他据理力争。献帝东迁时，杨彪尽节护主。曹操挟献帝定都许县后，将杨彪下狱，朝野之内尽是求情之人，获释后又任太常。之后汉室日渐衰微，便诈称脚疾，不理世事。曹魏建立后，拒绝出任太尉，改光禄大夫，待以客礼。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-359.html",
    "skills": [
      [
        "昭汉",
        "锁定技，你于游戏的前四个准备阶段增加一点体力上限并回复1点体力；之后的三个准备阶段扣减一点体力上限。"
      ],
      [
        "让节",
        "当你受到1点伤害后，你可以选择一项并摸一张牌：1.移动场上的一张牌；2.从牌堆或弃牌堆中获得一张你指定类型的牌。"
      ],
      [
        "义争",
        "出牌阶段限一次，你可选择一名体力不大于你的角色拼点：若你赢，跳过其下个摸牌阶段；若你没赢，你扣减一点体力上限。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E6%9D%A8%E5%BD%AA",
    "images": [
      "assets/heroes/359-杨彪-skin-01-36e4d3f7ef.jpg",
      "assets/heroes/359-杨彪-skin-02-446d177236.jpg",
      "assets/heroes/359-杨彪-skin-03-e5df44b1f7.jpg"
    ]
  },
  {
    "id": 254,
    "name": "许攸",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/254-许攸-skin-01-e3d3f96055.jpg",
    "thumb": "assets/heroes/254-许攸-thumb-2ca84d2d04.jpg",
    "intro": "本为袁绍帐下谋士，官渡之战时其家人因犯法而被收捕，许攸因此背袁投曹，并为曹操设下偷袭袁绍军屯粮之所乌巢的计策，袁绍因此而大败于官渡。后许攸随曹操平定冀州，因自恃其功而屡屡口出狂言，终因触怒曹操而被杀。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-254.html",
    "skills": [
      [
        "成略",
        "转换技，出牌阶段限一次，阳：你可以摸一张牌，然后弃置两张手牌。 阴：你可以摸两张牌，然后弃置一张手牌。 若如此做，直到本回合结束，你使用与弃置牌相同花色的牌无距离和次数限制。"
      ],
      [
        "恃才",
        "当你使用一张牌结算结束后，若此牌与你本回合使用的牌类型均不同（包括装备牌），你可以将此牌置于牌堆顶，然后摸一张牌。"
      ],
      [
        "寸目",
        "锁定技，当你摸牌时，改为从牌堆底摸牌。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E8%AE%B8%E6%94%B8",
    "images": [
      "assets/heroes/254-许攸-skin-01-e3d3f96055.jpg",
      "assets/heroes/254-许攸-skin-02-eb78d8b431.jpg",
      "assets/heroes/254-许攸-skin-03-f8c2e0861e.jpg",
      "assets/heroes/254-许攸-skin-04-66a9d384f9.jpg"
    ]
  },
  {
    "id": 348,
    "name": "神甘宁",
    "faction": "神",
    "factionClass": "shen",
    "hp": "6",
    "image": "assets/heroes/348-神甘宁-skin-01-674ac92e30.jpg",
    "thumb": "assets/heroes/348-神甘宁-thumb-ca2049fb7e.png",
    "intro": "字兴霸，巴郡临江人，祖籍荆州南阳郡。为人勇猛刚强，忠心耿耿，勇往无前。曾带兵百人于二更奇袭曹营，大挫其锐气。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-348.html",
    "skills": [
      [
        "魄袭",
        "出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以弃置你与其手里的四张牌（必须为四张且花色各不相同）。若如此做，根据此次弃置你的牌数量执行以下效果：没有，体力上限减1；一张，结束出牌阶段且本回合手牌上限-1；三张，回复1点体力；四张，摸四张牌。"
      ],
      [
        "劫营",
        "回合开始时，若全场没有有“营”的角色，你获得一个“营”标记；结束阶段，你可以将“营”放到一名其他角色武将旁；有“营”的角色摸牌阶段多摸一张牌、出牌阶段可多使用一张【杀】、手牌上限+1。有“营”的其他角色回合结束后，移去“营”，然后你获得其所有手牌。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E7%A5%9E%E7%94%98%E5%AE%81",
    "images": [
      "assets/heroes/348-神甘宁-skin-01-674ac92e30.jpg",
      "assets/heroes/348-神甘宁-skin-02-c23374c998.jpg"
    ]
  },
  {
    "id": 337,
    "name": "神荀彧",
    "faction": "神",
    "factionClass": "shen",
    "hp": "3",
    "image": "assets/heroes/337-神荀彧-skin-01-c5942bb587.jpg",
    "thumb": "assets/heroes/337-神荀彧-thumb-fa4813b351.png",
    "intro": "荀彧，字文若，颍川颍阴（今河南许昌）人。东汉末年曹操帐下首席谋臣，杰出的战略家。自小被世人称作“王佐之才”。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-337.html",
    "skills": [
      [
        "天佐",
        "锁定技，游戏开始时，将8张【奇正相生※】加入牌堆。【奇正相生】对你无效。"
      ],
      [
        "灵策",
        "锁定技。一名角色使用非虚拟非转化的锦囊牌时，若此牌的牌名属于智囊牌名、“定汉”已记录的牌名或【奇正相生※】时，你摸一张牌。"
      ],
      [
        "定汉",
        "每种牌名限一次，你成为锦囊牌的目标时，你记录此牌名，然后取消之。你的回合开始时，你可以在“定汉”记录中，增加或移除一种锦囊牌牌名。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E7%A5%9E%E8%8D%80%E5%BD%A7",
    "images": [
      "assets/heroes/337-神荀彧-skin-01-c5942bb587.jpg",
      "assets/heroes/337-神荀彧-skin-02-a3c858f67c.jpg"
    ]
  },
  {
    "id": 145,
    "name": "神赵云",
    "faction": "神",
    "factionClass": "shen",
    "hp": "2",
    "image": "assets/heroes/145-神赵云-skin-01-96fa5b6d68.jpg",
    "thumb": "assets/heroes/145-神赵云-thumb-2dcc124d85.jpg",
    "intro": "字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-145.html",
    "skills": [
      [
        "绝境",
        "锁定技，你的手牌上限+2；当你进入或脱离濒死状态时，你摸一张牌。"
      ],
      [
        "龙魂",
        "你可以将至多两张同花色的牌按以下规则使用或打出：红桃当【桃】；方块当火【杀】；梅花当【闪】；黑桃当【无懈可击】。若你以此法使用了两张红色牌，则此牌回复值或伤害值+1。若你以此法使用了两张黑色牌，则你弃置当前回合角色一张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E8%B5%B5%E4%BA%91",
    "images": [
      "assets/heroes/145-神赵云-skin-01-96fa5b6d68.jpg",
      "assets/heroes/145-神赵云-skin-02-f0eeaa3c0d.jpg"
    ]
  },
  {
    "id": 214,
    "name": "麹义",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/214-麹义-skin-01-413374d567.jpg",
    "thumb": "assets/heroes/214-麹义-thumb-22bfa073e6.jpg",
    "intro": "麹[qū]义，生卒年不详，是东汉末年军阀袁绍部下的将领，能征善战，屡建战功，早年在凉州，精通羌人战法，率领着袁绍的精锐部队。后来由于自恃功高而骄纵不轨，被袁绍所杀。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-214.html",
    "skills": [
      [
        "伏骑",
        "锁定技，在你使用牌时，某其他角色到你的距离为1，则他不能使用或打出牌响应你使用的牌。"
      ],
      [
        "骄恣",
        "锁定技，若你的手牌数为全场唯一最多，你造成或受到的伤害值+1。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E9%BA%B9%E4%B9%89",
    "images": [
      "assets/heroes/214-麹义-skin-01-413374d567.jpg",
      "assets/heroes/214-麹义-skin-02-8b2e2f8f2b.jpg",
      "assets/heroes/214-麹义-skin-03-7a8c6f02d4.jpg"
    ]
  },
  {
    "id": 304,
    "name": "祢衡",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/304-祢衡-skin-01-aebf5d7fff.jpg",
    "thumb": "assets/heroes/304-祢衡-thumb-ce7ad469d1.png",
    "intro": "字正平，三国时平原郡般县（今山东德州临邑县）人，东汉末年文学家。颇有才气，但性情狷狭、不能容物。与孔融交好，被孔融推荐去投效曹操。后因羞辱曹操，被曹操遣送去刘表处。后又因对刘表口出恶言，被刘表遣送到黄祖处。黄祖性情暴躁，加之祢衡在宴席上言行失态，遂将祢衡绞杀。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-304.html",
    "skills": [
      [
        "狂才",
        "出牌阶段开始时，你可以令你此阶段内的主动出牌时间变为5秒，响应出牌时间也变为5秒。若如此做，你使用牌没有距离和次数限制，且每当你于此阶段内使用牌时,你摸一张牌且主动出牌时间-1秒。你每个出牌阶段通过狂才最多获得5张牌"
      ],
      [
        "舌剑",
        "若你于弃牌阶段弃置过至少两张牌且这些牌花色均不相同，你可弃置一名其他角色的一张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%A2%E8%A1%A1",
    "images": [
      "assets/heroes/304-祢衡-skin-01-aebf5d7fff.jpg"
    ]
  },
  {
    "id": 408,
    "name": "周处",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/408-周处-skin-01-cde6480fcd.jpg",
    "thumb": "assets/heroes/408-周处-thumb-8f911929ce.png",
    "intro": "周处（236—297年 ），字子隐，吴郡阳羡（今江苏宜兴）人。 西晋大臣、将领，东吴鄱阳太守周鲂之子。 少时纵情肆欲，为祸乡里。后来改过自新，拜访名人陆机和陆云，浪子回头，发奋读书，留下“周处除三害”的传说，拜东观左丞，迁无难都督，功业胜过父亲。吴国灭亡后，出仕西晋，拜新平太守，转广汉太守，治境有方。入为散骑常侍，迁御史中丞，刚正不阿。得罪梁孝王司马肜。 元康七年，出任建威将军，前往关中，讨伐氐羌齐万年叛乱，遇害于沙场。追赠平西将军，谥号为孝。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-408.html",
    "skills": [
      [
        "乡害",
        "锁定技，场上所有其他角色的手牌上限-1。你手牌区所有装备牌均视为【酒】。"
      ],
      [
        "除害",
        "使命技，出牌阶段限一次，你可以摸一张牌，并与一名其他角色拼点，此次你的拼点牌点数增加X（X为4减去你装备区的装备数量）。若你赢：你观看其手牌，然后从牌堆或弃牌堆中获得其手牌中拥有的牌类型各一张；当你于此阶段对其造成伤害后，你将牌堆或弃牌堆中一张你空置装备栏对应类型的装备牌，置入你的装备区。 成功：当一张装备牌进入你的装备区后，若你的装备区有不少于3张装备，则你将体力值回复至上限，获得“彰名※”，失去“乡害”。彰名：锁定技，①你使用的梅花牌不能被响应；②每回合限一次，你对其他角色造成伤害后，其随机弃置一张手牌，然后你从牌堆或弃牌堆中获得每种类别的牌各一张（不包含其弃置的牌的类别；你以此法获得的牌不计入你本回合的手牌上限）。 失败：若你于使命达成前，你使用“除害”拼点没赢，且你的拼点结果不大于6点，则使命失败。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E5%91%A8%E5%A4%84",
    "images": [
      "assets/heroes/408-周处-skin-01-cde6480fcd.jpg"
    ]
  },
  {
    "id": 402,
    "name": "杜预",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/402-杜预-skin-01-514652ebe7.jpg",
    "thumb": "assets/heroes/402-杜预-thumb-fc9701d806.png",
    "intro": "杜预（222年－285年），字元凯，京兆郡杜陵县（今陕西西安）人，中国魏晋时期军事家、经学家、律学家，曹魏散骑常侍杜恕之子。 杜预出身京兆杜氏。初仕曹魏，任尚书郎，后成为权臣司马昭的幕僚，封丰乐亭侯。西晋建立后，历任河南尹、安西军司、秦州刺史、度支尚书等职，与贾充等修《晋律》。咸宁四年（278年）接替羊祜出任镇南大将军，镇守荆州。他积极备战，支持晋武帝司马炎对孙吴作战，并在咸宁五年（279年）成为晋灭吴之战的统帅之一。战后因功进封当阳县侯，仍镇荆州。在战后仍讲武备战，兴建学校，督修水利，被时人称为“杜父”。 太康五年（285年），杜预被征入朝，拜司隶校尉，途中于邓县逝世，终年六十三岁。获赠征南大将军、开府仪同三司，谥号“成”。 杜预耽思经籍，博学多通，多有建树，时誉为“杜武库”。曾注《孙子》十三篇，并著《春秋左氏传集解》《春秋释例》等。为明朝之前唯一一个同时进入文庙和武庙之人。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-402.html",
    "skills": [
      [
        "武库",
        "锁定技，当一名角色使用装备时，你获得一个“武库”标记。(“武库”数量至多为3)"
      ],
      [
        "三陈",
        "觉醒技，结束阶段，若你已有3个“武库”，你回复一点体力，然后获得技能“灭吴※”。"
      ],
      [
        "灭吴※",
        "每回合限一次，你可以移去1个“武库”标记，将一张牌当任意一张非装备牌非延迟锦囊使用或打出，然后你摸一张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E6%9D%9C%E9%A2%84",
    "images": [
      "assets/heroes/402-杜预-skin-01-514652ebe7.jpg",
      "assets/heroes/402-杜预-skin-02-19cab93fe9.jpg"
    ]
  },
  {
    "id": 93,
    "name": "留赞",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/93-留赞-skin-01-a760819cef.jpg",
    "thumb": "assets/heroes/93-留赞-thumb-f03ef4ad80.jpg",
    "intro": "字正明，会稽[kuài jī]长山（今浙江金华）人，曾任左护军，有两子：留略、留平。少为会稽郡吏，曾参与镇压黄巾起义，后被东吴大将凌统所引用，任屯骑校尉。诸葛恪[kè]东征，留赞为前部，会战先陷阵，大败魏师，以功升左将军。吴五凤二年（公元255年）留赞任左护军，随孙峻征淮[huái]南，因病撤军，被魏将蒋班围困于道，力战而死，时年73岁。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-93.html",
    "skills": [
      [
        "奋音",
        "你的回合内，每当你使用了一张与上一张颜色不同的牌时，你摸一张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%95%99%E8%B5%9E",
    "images": [
      "assets/heroes/93-留赞-skin-01-a760819cef.jpg",
      "assets/heroes/93-留赞-skin-02-653ee8bc95.jpg",
      "assets/heroes/93-留赞-skin-03-5c193dea98.jpg",
      "assets/heroes/93-留赞-skin-04-eb9de02cd6.jpg"
    ]
  },
  {
    "id": 420,
    "name": "文鸯",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "4",
    "image": "assets/heroes/420-文鸯-skin-01-8c7590b7b1.jpg",
    "thumb": "assets/heroes/420-文鸯-thumb-bd5844ef70.png",
    "intro": "文鸯（238~291年），字次骞，小名阿鸯，世称文鸯，沛国谯郡（今安徽省亳州市）人。魏末晋初时期名将，曹魏扬州刺史文钦之子。司马师废黜皇帝曹芳后，参加毌丘俭淮南起兵，兵败之后投奔吴国。后跟随文钦率军支援诸葛诞发动淮南叛乱，得知父亲为诸葛诞所害，归顺大将军司马昭，受封关内侯。咸宁三年（277年），文鸯大破西部鲜卑首领秃发树机能，名震天下，迁护东夷校尉。西晋永平元年，为东安王司马繇（诸葛诞外孙）所构陷，遭夷三族之祸，时年五十四岁。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-420.html",
    "skills": [
      [
        "却敌",
        "每回合限一次，你使用【杀】或【决斗】指定唯一目标后，可以选择一项：1.获得其一张手牌；2. 弃置一张基本牌，然后此【杀】或【决斗】伤害+1；背水：减少1点体力上限。"
      ],
      [
        "椎锋",
        "椎[chuí]锋:魏势力技，出牌阶段限两次，你可以流失1点体力，视为使用一张【决斗】；若此【决斗】对你造成伤害，则你防止此伤害，然后“椎锋”失效直到此阶段结束。"
      ],
      [
        "冲坚",
        "吴势力技，你可以将一张装备牌当做【酒】或无距离限制且无视目标防具的【杀】使用。以此法使用的【杀】造成伤害后，你获得目标装备区X张牌（X为此【杀】对此目标造成的伤害值）。"
      ],
      [
        "仇决",
        "锁定技，你杀死其他角色后，则你增加1点体力上限，摸两张牌，然后本回合可以额外发动一次“却敌※”。却敌：每回合限一次，你使用【杀】或【决斗】指定唯一目标后，可以选择一项：1.获得其一张手牌；2.弃置一张基本牌，然后此【杀】或【决斗】伤害+1；背水：减少1点体力上限。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E6%96%87%E9%B8%AF",
    "images": [
      "assets/heroes/420-文鸯-skin-01-8c7590b7b1.jpg"
    ]
  },
  {
    "id": 266,
    "name": "王元姬",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/266-王元姬-skin-01-5a97163902.jpg",
    "thumb": "assets/heroes/266-王元姬-thumb-bb262118cc.jpg",
    "intro": "王元姬（217年—268年4月20日），东海郯县人。王朗之孙女、王肃之女，司马昭之妻，晋武帝司马炎与齐王司马攸的生母。幼时便通《诗经》、《论语》，嫁司马昭后竭尽妇道、谦虚谨慎。其人颇有远见，曾预言钟会谋反之事。泰始元年（265年），司马炎建立西晋，尊王元姬为皇太后，王元姬身处太后之位，提倡节俭，身体力行，作为众妃子的表率。在其治理之下，后宫井井有条，众人和睦相处。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-266.html",
    "skills": [
      [
        "谦冲",
        "锁定技，如果你的装备区所有牌均为黑色，则你获得“帷幕”（锁定技，你不能被选择为黑色锦囊牌的目标）；如果你的装备区所有牌均为红色，则你获得“明哲”（当你于回合外因使用、打出或弃置而失去红色牌时，你可以摸一张牌）。出牌阶段开始时，若你不满足上述条件，则你选择一种类型的牌，本回合使用此类型的牌无次数和距离限制。"
      ],
      [
        "尚俭",
        "锁定技，任一角色的结束阶段，若你于此回合失去的牌不大于你的体力值，你可以摸等同于失去数量的牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%8E%8B%E5%85%83%E5%A7%AC",
    "images": [
      "assets/heroes/266-王元姬-skin-01-5a97163902.jpg",
      "assets/heroes/266-王元姬-skin-02-2f25f7f50b.jpg",
      "assets/heroes/266-王元姬-skin-03-5a5362c94d.jpg",
      "assets/heroes/266-王元姬-skin-04-022fbd14f3.jpg",
      "assets/heroes/266-王元姬-skin-05-1dad789845.jpg"
    ]
  },
  {
    "id": 554,
    "name": "十常侍",
    "faction": "群",
    "factionClass": "qun",
    "hp": "1",
    "image": "assets/heroes/554-十常侍-skin-01-685de4274f.jpg",
    "thumb": "assets/heroes/554-十常侍-thumb-3c1c4ceea9.jpg",
    "intro": "十常侍，指中国东汉（公元25年—220年）灵帝时期（168年-189年）操纵政权的宦官，其首领是张让和赵忠。他们玩弄小皇帝于股掌之中，以至灵帝称“张常侍是我父，赵常侍是我母”。十常侍自己横征暴敛，卖官鬻爵，他们的父兄子弟遍布天下，横行乡里，祸害百姓，无官敢管。人民不堪剥削、压迫，纷纷起来反抗。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-554.html",
    "skills": [
      [
        "党锢",
        "锁定技。游戏开始时，你获得十张不同的“常侍”牌，然后你进行一次“结党”。当你休整结束移回游戏后，你进行一次“结党”，然后你摸一张牌。你获得你亮出“常侍”牌的技能。"
      ],
      [
        "殁亡",
        "殁[mò]亡：锁定技，你死亡后，若你拥有技能“党锢”，且你仍有未亮出的“常侍”牌，则改为休整一轮。回合结束后，你死亡。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E5%8D%81%E5%B8%B8%E4%BE%8D",
    "images": [
      "assets/heroes/554-十常侍-skin-01-685de4274f.jpg"
    ]
  },
  {
    "id": 581,
    "name": "神鲁肃",
    "faction": "神",
    "factionClass": "shen",
    "hp": "3",
    "image": "assets/heroes/581-神鲁肃-skin-01-951570ff48.jpg",
    "thumb": "assets/heroes/581-神鲁肃-thumb-8c84b34aef.png",
    "intro": "鲁肃（172年-217年），字子敬，临淮东城（今安徽定远）人。中国东汉末年孙权的谋士与将领。东汉末年的孙权部将、战略家、外交家。 为人方严，生活俭朴，治军有方，又勤于学，虽在军阵，手不释卷，善谈论，能属文辞，深谋远虑，有过人之明，非一般尚武之人可比，对促成周瑜与诸葛亮的合作，维护孙、刘联盟的大局，为赤壁之战的胜利，三国鼎立局面的形成，起到了积极作用。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-581.html",
    "skills": [
      [
        "榻谟",
        "（身份场）游戏开始时，你可以重新分配除主公外每名角色的座次。（斗地主）游戏开始时，你可以重新分配三号位以外的角色的座次。（团战类）游戏开始时，你可以重新分配每名角色的座次。"
      ],
      [
        "定州",
        "出牌阶段限一次，你交给一名角色X张牌 （X为其场上牌的张数），然后你获得其场上的所有牌。"
      ],
      [
        "智盟",
        "（身份场）你的回合结束后，你可以选择一名其他角色，你与其随机平均分配双方手牌（若为奇数则你分配较多张数）。（斗地主、团战类）你的回合结束后，你可选择一名手牌数不大于x的其他角色（x为你的手牌数+1），你与其随机平均分配双方手牌（若为奇数则你分配较多张数）。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E9%B2%81%E8%82%83",
    "images": [
      "assets/heroes/581-神鲁肃-skin-01-951570ff48.jpg"
    ]
  },
  {
    "id": 645,
    "name": "神姜维",
    "faction": "神",
    "factionClass": "shen",
    "hp": "4",
    "image": "assets/heroes/645-神姜维-skin-01-266a62b206.png",
    "thumb": "assets/heroes/645-神姜维-thumb-41ff7cd6aa.png",
    "intro": "姜维身陨后，忠魂不坠，常耀星野。时雍凉大旱，赤地千里。忽星魂垂照，天涛翻涌，神霈沛然骤降，三日不绝。万姓仰观，但见云中有神人执剑布雨，威仪凛然。父老涕泣相告，皆言此乃姜维回天之力。遂立祠天水，四时奉祀。其未酬壮志，终化甘霖济世，虽身死国灭，亦成万民雨神。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-645.html",
    "skills": [
      [
        "星魂",
        "出牌阶段限一次，你可观看牌堆顶五张牌，用任意张手牌与其中等量牌进行交换并排序，然后你令一名其他角色展示你手牌与牌堆顶共五张牌，你对其依次使用其中的【杀】。"
      ],
      [
        "天涛",
        "锁定技，结束阶段，你选择一个区域并弃置其中所有牌，然后依次弃置任意名其他角色相同区域各一张牌，因此弃置牌且未弃置【杀】的角色失去1点体力。"
      ],
      [
        "神霈",
        "限定技，你进入濒死时，可回复X点体力（X为你本局游戏进入过濒死的次数），对一名角色造成等量雷电伤害并获得“回天”。回天：一名体力值大于你的角色回合结束时，你可摸一张牌并执行一个额外的回合。每轮开始时，若你发动过此技能，你死亡。"
      ],
      [
        "回天",
        "一名体力值大于你的角色回合结束时，你可摸一张牌并执行一个额外的回合。每轮开始时，若你发动过此技能，你死亡。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E5%A7%9C%E7%BB%B4",
    "images": [
      "assets/heroes/645-神姜维-skin-01-266a62b206.png"
    ]
  },
  {
    "id": 338,
    "name": "神孙策",
    "faction": "神",
    "factionClass": "shen",
    "hp": "6",
    "image": "assets/heroes/338-神孙策-skin-01-1819a8287e.jpg",
    "thumb": "assets/heroes/338-神孙策-thumb-b12d006e69.png",
    "intro": "字伯符，吴郡富春人。破虏将军孙坚长子、吴大帝孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，孙吴政权的奠基者之一，绰号“小霸王”。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-338.html",
    "skills": [
      [
        "英霸",
        "出牌阶段限一次，你可以选择一名体力值上限大于1的其他角色，令其减少1点体力值上限并获得“平定”标记，然后你减少1点体力值上限。你对拥有“平定”标记的角色使用牌没有距离限制。"
      ],
      [
        "覆海",
        "锁定技，拥有“平定”标记的角色不能响应你对其使用的牌。你使用牌指定有“平定”标记的角色为目标时，若本回合你以此法获得的牌少于两张，你摸一张牌。拥有“平定”标记的角色死亡时，你增加X点体力值上限并摸X张牌（X为其拥有的“平定”标记数）。"
      ],
      [
        "冯河",
        "冯[píng]河，锁定技，你的手牌数上限等于已损失体力值。当你受到其他角色造成的伤害时，若你有手牌且体力上限大于1，则防止本次伤害，然后减少1点体力值上限并将1张手牌交给一名其他角色，然后若你拥有技能“英霸”，令伤害来源获得1个“平定”标记。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E5%AD%99%E7%AD%96",
    "images": [
      "assets/heroes/338-神孙策-skin-01-1819a8287e.jpg"
    ]
  },
  {
    "id": 272,
    "name": "神陆逊",
    "faction": "神",
    "factionClass": "shen",
    "hp": "4",
    "image": "assets/heroes/272-神陆逊-skin-01-26f590a8d5.jpg",
    "thumb": "assets/heroes/272-神陆逊-thumb-375e572862.jpg",
    "intro": "本名陆议，字伯言，吴郡吴县人。历任东吴大都督、丞相。吴大帝孙权兄孙策之婿，世代为江东大族。以谦逊之书麻痹关羽，夺取荆州，又有火烧连营大破蜀军。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-272.html",
    "skills": [
      [
        "军略",
        "锁定技，当你受到或造成1点伤害后，你获得一个“军略”标记。"
      ],
      [
        "摧克",
        "出牌阶段开始时，若“军略”数量为奇数，你可以对一名角色造成1点伤害；若“军略”数量为偶数，你可以让一名角色进入连环状态并弃置其区域里的一张牌。若“军略”数量超过7个，你可以移去全部“军略”标记并对所有其他角色造成1点伤害。"
      ],
      [
        "绽火",
        "限定技，出牌阶段，你可以移去全部“军略”标记，令至多等量的处于连环状态的角色弃置所有装备区里的牌，然后对其中1名角色造成1点火焰伤害。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E9%99%86%E9%80%8A",
    "images": [
      "assets/heroes/272-神陆逊-skin-01-26f590a8d5.jpg",
      "assets/heroes/272-神陆逊-skin-02-ee5d515343.jpg"
    ]
  },
  {
    "id": 271,
    "name": "神刘备",
    "faction": "神",
    "factionClass": "shen",
    "hp": "6",
    "image": "assets/heroes/271-神刘备-skin-01-64c96a1f14.jpg",
    "thumb": "assets/heroes/271-神刘备-thumb-ae52385405.jpg",
    "intro": "先主姓刘，讳备，字玄德，涿[zhuō]郡涿县人，汉景帝子中山靖王胜之后也。以仁德治天下。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-271.html",
    "skills": [
      [
        "龙怒",
        "转换技，锁定技，出牌阶段开始时，阳：你失去1点体力并摸一张牌，然后本回合你的红色手牌均视为火【杀】且无距离限制； 阴：你减1点体力上限并摸一张牌，然后本回合你的锦囊牌均视为雷【杀】且无次数限制。"
      ],
      [
        "结营",
        "锁定技，游戏开始时，你处于连环状态，【铁索连环】解除连环的效果对你无效，其他武将技能或卡牌令你解除连环状态的效果失效，当你受到属性伤害结算后立即进入连环状态；已处于连环状态的角色手牌上限+2；结束阶段，你让一名其他角色进入连环状态。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E5%88%98%E5%A4%87",
    "images": [
      "assets/heroes/271-神刘备-skin-01-64c96a1f14.jpg"
    ]
  },
  {
    "id": 146,
    "name": "神司马懿",
    "faction": "神",
    "factionClass": "shen",
    "hp": "4",
    "image": "assets/heroes/146-神司马懿-skin-01-ba0cb98060.jpg",
    "thumb": "assets/heroes/146-神司马懿-thumb-702407fae6.jpg",
    "intro": "司马懿[yì]（179年－251年9月7日），字仲达，河内郡温县（今河南省焦作市温县）人，三国时期魏国权臣、政治家、军事家。曾挫败蜀汉丞相诸葛亮的北伐军，坚守疆土。历经曹操、曹丕、曹叡、曹芳四代君主，晚年发动高平陵之变，掌握曹魏的政权。 嘉平三年（251年），魏朝谥舞阳宣文侯；次子司马昭称晋王后，追尊谥为晋宣王；孙司马炎称帝后，追尊为高祖宣皇帝[1]，故也称晋高祖、晋宣帝。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-146.html",
    "skills": [
      [
        "忍戒",
        "锁定技，当你受到伤害后，或于弃牌阶段内弃置手牌后，你获得X枚“忍”标记（X为伤害值或弃置的手牌数）。"
      ],
      [
        "拜印",
        "觉醒技，准备阶段开始时，若\"忍\"标记的数量不小于4，你减1点体力上限，然后获得\"极略\"。"
      ],
      [
        "极略※",
        "你可以弃置1枚“忍”标记，发动下列一项技能：“鬼才”、“放逐”、“集智”、“制衡”或“完杀”。"
      ],
      [
        "鬼才※",
        "当一名角色的判定牌生效前，你可以打出一张牌代替之。"
      ],
      [
        "放逐※",
        "当你受到伤害后，你可以令一名其他角色摸X张牌（X为你已损失的体力值）并翻面。"
      ],
      [
        "集智※",
        "当你使用一张非转化的锦囊牌时，你可以摸一张牌。若此牌为基本牌，你可以弃置此牌，令你本回合的手牌上限+1。"
      ],
      [
        "制衡※",
        "出牌阶段限一次，你可以弃置任意张牌，然后摸等量的牌；若你以此法弃置了所有的手牌，则额外摸一张牌。"
      ],
      [
        "完杀※",
        "你的回合内，当一名角色进入濒死状态时，你令除你和其以外的角色不能对其使用【桃】直到此次濒死结算结束。"
      ],
      [
        "连破",
        "当你杀死任意角色后，你可于此回合结束后获得一个额外回合。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E5%8F%B8%E9%A9%AC%E6%87%BF",
    "images": [
      "assets/heroes/146-神司马懿-skin-01-ba0cb98060.jpg",
      "assets/heroes/146-神司马懿-skin-02-e9b10ceeab.jpg"
    ]
  },
  {
    "id": 144,
    "name": "神吕布",
    "faction": "神",
    "factionClass": "shen",
    "hp": "5",
    "image": "assets/heroes/144-神吕布-skin-01-e9fbb61653.jpg",
    "thumb": "assets/heroes/144-神吕布-thumb-1e0342af6e.jpg",
    "intro": "字奉先，五原郡九原县人。三国第一猛将，曾独力战刘关张三人，其武力世之无双。时人语曰：“人中有吕布，马中有赤兔。”",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-144.html",
    "skills": [
      [
        "狂暴",
        "锁定技，游戏开始时，你获得2枚\"暴怒\"标记；当你造成或受到1点伤害后，你获得1枚\"暴怒\"标记。"
      ],
      [
        "无谋",
        "锁定技，当你使用普通锦囊牌时，你弃1枚\"暴怒\"标记或失去1点体力。"
      ],
      [
        "无前",
        "出牌阶段，你可以弃2枚\"暴怒\"标记并选择一名其他角色，然后本回合你获得\"无双\"且该角色的防具失效。无双：锁定技，你使用的【杀】需两张【闪】才能抵消；与你进行【决斗】的角色每次需打出两张【杀】。"
      ],
      [
        "神愤",
        "出牌阶段限一次，你可以弃6枚\"暴怒\"标记，然后对所有其他角色各造成1点伤害，这些角色先各弃置装备区里的所有牌，再弃置四张手牌，最后你翻面。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E5%90%95%E5%B8%83",
    "images": [
      "assets/heroes/144-神吕布-skin-01-e9fbb61653.jpg",
      "assets/heroes/144-神吕布-skin-02-89be80e3dd.jpg",
      "assets/heroes/144-神吕布-skin-03-787b5ab0ec.jpg"
    ]
  },
  {
    "id": 140,
    "name": "神吕蒙",
    "faction": "神",
    "factionClass": "shen",
    "hp": "3",
    "image": "assets/heroes/140-神吕蒙-skin-01-c77c24e157.jpg",
    "thumb": "assets/heroes/140-神吕蒙-thumb-ebccbefc23.jpg",
    "intro": "吕蒙,字子明,汝南富陂人,东吴名将,原有“吴下阿蒙”之贬称,后受孙权劝说,奋发读书,最终成就一代名将。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-140.html",
    "skills": [
      [
        "涉猎",
        "摸牌阶段，你可以改为亮出牌堆顶的五张牌，然后获得其中每种花色的牌各一张。"
      ],
      [
        "攻心",
        "出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以展示其中一张红桃牌，选择一项：1.弃置此牌；2.将此牌置于牌堆顶。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E5%90%95%E8%92%99",
    "images": [
      "assets/heroes/140-神吕蒙-skin-01-c77c24e157.jpg",
      "assets/heroes/140-神吕蒙-skin-02-17136c8070.jpg"
    ]
  },
  {
    "id": 141,
    "name": "神周瑜",
    "faction": "神",
    "factionClass": "shen",
    "hp": "4",
    "image": "assets/heroes/141-神周瑜-skin-01-920f3d7aa8.jpg",
    "thumb": "assets/heroes/141-神周瑜-thumb-8aed5a38b7.jpg",
    "intro": "字公瑾，庐江舒县人。东汉末年名将。有姿貌、精音律，江东有“曲有误，周郎顾”之语。周瑜少与孙策交好，后孙策遇刺身亡，孙权继任。周瑜将兵赴丧，以中护军的身份与长史张昭共掌众事，建安十三年（208年），周瑜率东吴军与刘备军联合，在赤壁击败曹操。此战也奠定了三分天下的基础。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-141.html",
    "skills": [
      [
        "琴音",
        "弃牌阶段结束时，若你于此阶段内弃置过你的至少两张手牌，则你可以选择一项：1.令所有角色各回复1点体力；2.令所有角色各失去1点体力。"
      ],
      [
        "业炎",
        "限定技，出牌阶段，你可以选择至多三名角色，对这些角色造成共计至多3点火焰伤害（若你将对一名角色分配2点或更多火焰伤害，你须先弃置四张花色各不相同的手牌并失去3点体力）。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E5%91%A8%E7%91%9C",
    "images": [
      "assets/heroes/141-神周瑜-skin-01-920f3d7aa8.jpg",
      "assets/heroes/141-神周瑜-skin-02-3cc3ff0ee9.jpg",
      "assets/heroes/141-神周瑜-skin-03-053abd681b.jpg",
      "assets/heroes/141-神周瑜-skin-04-ac38ffa4d6.jpg"
    ]
  },
  {
    "id": 332,
    "name": "神太史慈",
    "faction": "神",
    "factionClass": "shen",
    "hp": "4",
    "image": "assets/heroes/332-神太史慈-skin-01-510e4c66b4.jpg",
    "thumb": "assets/heroes/332-神太史慈-thumb-deaf119862.png",
    "intro": "太史慈，字子义，东莱黄县（今山东龙口东黄城集）人。东汉末年武将，守言应诺，恪遵信义，始终如一，弭[mǐ]息诽论。官至建昌都尉。弓马熟练，箭法精良。原为刘繇[yáo]部下，后被孙策收降，于赤壁之战前病逝，死时才四十一岁。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-332.html",
    "skills": [
      [
        "笃烈",
        "笃[dǔ]烈：锁定技，当你成为体力值大于你的角色使用【杀】的目标时，你进行判定：若判定结果为红桃，取消之。"
      ],
      [
        "破围",
        "使命技，游戏开始时，你令所有其他角色获得“围”标记。回合开始时，你令所有拥有“围”标记的角色将“围”标记移动到下家角色（若你获得“围”标记，则直接交给下家）。有“围”的角色受到伤害后，弃置其“围”标记。有“围”的角色回合开始时，你可以选择一项：1. 弃置一张手牌，对其造成1点伤害；2.若其体力值不大于你，获得其一张手牌；若如此做，直到本回合结束，你视为在其攻击范围内。 成功：你的回合开始时，若场上没有“围”标记，你获得技能“神著※”。神著：锁定技，当你使用非转化且非虚拟的【杀】结算结束后，你选择一项：1.摸一张牌，然后若此时是你的出牌阶段，你本阶段使用【杀】的次数上限+1；2.摸三张牌，然后你本回合不能再使用【杀】。 失败：若你成功达成使命前，进入濒死状态时，你将体力值回复至1点，移除场上所有的“围”标记，然后弃置装备区所有牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E5%A4%AA%E5%8F%B2%E6%85%88",
    "images": [
      "assets/heroes/332-神太史慈-skin-01-510e4c66b4.jpg"
    ]
  },
  {
    "id": 568,
    "name": "神华佗",
    "faction": "神",
    "factionClass": "shen",
    "hp": "3",
    "image": "assets/heroes/568-神华佗-skin-01-88bdaf3f61.jpg",
    "thumb": "assets/heroes/568-神华佗-thumb-4a30e2007a.jpg",
    "intro": "字元化，一名旉，沛国谯县（今安徽亳州）人，东汉末年著名的医学家，后人称其为“神医华佗”。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-568.html",
    "skills": [
      [
        "五灵",
        "五灵:出牌阶段限两次，你可以选择一名未拥有“五灵”标记的角色，按照你指定的顺序向其传授“五禽戏”。拥有“五灵”标记的角色拥有按照你指定的效果，并在准备阶段切换为下一种。虎灵：若你使用的牌仅指定唯一目标，则此牌对目标角色造成伤害时，此伤害+1。鹤灵：拥有“鹤”标记的角色获得“鹤”标记时，摸三张牌。熊灵：每回合限一次，你受到伤害时，此伤害-1。猿灵：拥有“猿”标记的角色获得“猿”标记时，选择另一名角色，获得其装备区的一张牌。鹿灵：你获得“鹿”标记时，回复1点体力，移除判定区所有牌。你不能成为延时锦囊目标。"
      ],
      [
        "游医",
        "游医：弃牌阶段结束时，你可以将此阶段弃置的牌置入”仁“区。出牌阶段限一次，你可以弃置所有”仁“区的牌，令所有角色回复1点体力。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E5%8D%8E%E4%BD%97",
    "images": [
      "assets/heroes/568-神华佗-skin-01-88bdaf3f61.jpg"
    ]
  },
  {
    "id": 657,
    "name": "神马超",
    "faction": "神",
    "factionClass": "shen",
    "hp": "4",
    "image": "assets/heroes/657-神马超-skin-01-c674638488.jpg",
    "thumb": "assets/heroes/657-神马超-thumb-e676bc32aa.png",
    "intro": "神出西凉，其名马超。雷霆为枪，风云为袍。或镇极雷城，巍然屹立，万雷归序；或尘游人间，闲身自远，世事无拘；或诛妄破伪，涤尽虚妄，真道独存；或和光同尘，藏锋守寂，雷霆含情。一念动而万雷随，神格显而万象生。天地之间，长留其声。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-657.html",
    "skills": [
      [
        "驭雳",
        "锁定技，1.你造成的伤害改为雷电伤害，已是雷电伤害则伤害+1；2.你受到雷电伤害时，防止之并摸等量牌。"
      ],
      [
        "霆威",
        "你使用【杀】指定目标后，可获得4个“霆”标记并选择一名目标角色，其选择任意项（每选择一项，你失去1个“霆”标记）：1.非锁定技失效至其下个回合结束；2.交给你一张装备牌；3.此牌对其造成伤害+1；4.随机弃一张牌。若其均不选择，其进入连环状态。"
      ],
      [
        "寂灭",
        "限定技，出牌阶段结束时，你可失去8个“霆”，对一名角色造成等于其体力上限的伤害。然后你“驭雳”的两项均执行后，该技能可再次发动。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E7%A5%9E%E9%A9%AC%E8%B6%85",
    "images": [
      "assets/heroes/657-神马超-skin-01-c674638488.jpg"
    ]
  },
  {
    "id": 444,
    "name": "谋·黄忠",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "4",
    "image": "assets/heroes/444-谋-黄忠-skin-01-a6076f8f90.jpg",
    "thumb": "assets/heroes/444-谋-黄忠-thumb-8f09bae553.png",
    "intro": "字汉升，今河南南阳人。汉末三国时期蜀汉名将。本为刘表部下中郎将，后归刘备，并助刘备攻益州刘璋，在定军山一战中阵斩曹操部下名将夏侯渊。备称汉中王后改封后将军，赐关内侯。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-444.html",
    "skills": [
      [
        "烈弓",
        "若你未装备武器，你的【杀】只能当作普通【杀】使用或打出。你使用牌时或成为其他角色使用牌的目标后，若此牌的花色未被“烈弓”记录，则记录此种花色。当你使用【杀】指定唯一目标后，你可以展示牌堆顶的X张牌（X为你记录的花色数-1，且至少为0），然后每有一张牌花色与“烈弓”记录的花色相同，你令此【杀】伤害+1，且其不能使用“烈弓”记录花色的牌响应此【杀】。若如此做，此【杀】结算结束后，清除“烈弓”记录的花色。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E9%BB%84%E5%BF%A0",
    "images": [
      "assets/heroes/444-谋-黄忠-skin-01-a6076f8f90.jpg",
      "assets/heroes/444-谋-黄忠-skin-02-9acf6c4699.jpg",
      "assets/heroes/444-谋-黄忠-skin-03-5aa194a40a.jpg",
      "assets/heroes/444-谋-黄忠-skin-04-b422150888.jpg",
      "assets/heroes/444-谋-黄忠-skin-05-3b3f7fba84.jpg",
      "assets/heroes/444-谋-黄忠-skin-06-6210bbb6c2.jpg"
    ]
  },
  {
    "id": 552,
    "name": "谋·孙权",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/552-谋-孙权-skin-01-1ac14325ea.jpg",
    "thumb": "assets/heroes/552-谋-孙权-thumb-fe96814ced.jpg",
    "intro": "吴大帝孙权，字仲谋，吴郡富春县（今浙江省杭州市富阳区）人。孙策遇刺身亡后，孙权继之掌事，得张昭、周瑜等委心服事。建安十三年（208年），与刘备联军击败曹操，后又于夷陵之战击败刘备。黄龙元年（229年），在武昌正式称帝，国号吴。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-552.html",
    "skills": [
      [
        "制衡",
        "出牌阶段限一次，你可以弃置任意张牌，然后摸等量的牌。若你弃置了所有手牌，则额外摸X+1张牌（X为你拥有的“业”标记数量），然后移除一个“业”标记。"
      ],
      [
        "统业",
        "锁定技，结束阶段，你须选择一项，直到下回合准备阶段：1.若场上的装备数变化，则你获得一个“业”标记，否则失去一个“业”标记；2.若场上的装备数不变，则你获得一个“业”标记，否则失去一个“业”标记。你至多拥有2个“业”标记。"
      ],
      [
        "救援",
        "主公技，锁定技，其他吴势力角色使用【桃】时，你摸一张牌。其他吴势力角色对你使用【桃】回复的体力+1。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%AD%99%E6%9D%83",
    "images": [
      "assets/heroes/552-谋-孙权-skin-01-1ac14325ea.jpg"
    ]
  },
  {
    "id": 572,
    "name": "谋·关羽",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "4",
    "image": "assets/heroes/572-谋-关羽-skin-01-e26b540e40.png",
    "thumb": "assets/heroes/572-谋-关羽-thumb-f7ed1722d9.png",
    "intro": "字云长，本字长生，并州河东解[hài]州人。五虎上将之首，爵至汉寿亭侯，谥曰“壮缪侯”。被奉为“关圣帝君”，崇为“武圣”。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-572.html",
    "skills": [
      [
        "武圣",
        "武圣：你可以将一张手牌当作【杀】使用或打出。出牌阶段开始时，你可以指定一名主公以外的角色。此阶段：你对其使用【杀】无距离和次数限制；你使用【杀】指定其为目标后，你摸一张牌（若为身份场则修改为摸两张牌）；你对其使用三张【杀】后，不可再指定其为你使用【杀】的目标。"
      ],
      [
        "义绝",
        "义绝：锁定技。一名其他角色于你的回合内受到你造成的伤害时，若此伤害会令其进入濒死状态，防止之（本局游戏每名角色限一次）。若如此做，直到回合结束，你使用牌指定其为目标时，取消之。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%85%B3%E7%BE%BD",
    "images": [
      "assets/heroes/572-谋-关羽-skin-01-e26b540e40.png"
    ]
  },
  {
    "id": 498,
    "name": "谋·曹操",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "4",
    "image": "assets/heroes/498-谋-曹操-skin-01-96e68d8edb.jpg",
    "thumb": "assets/heroes/498-谋-曹操-thumb-75a2084710.jpg",
    "intro": "魏武帝曹操，字孟德，小名阿瞒、吉利，沛[pèi]国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-498.html",
    "skills": [
      [
        "奸雄",
        "受到伤害后，你可以获得造成伤害的牌，然后根据“治世”标记摸牌，治世标记越多摸牌量越少。"
      ],
      [
        "清正",
        "你可弃置数个花色的所有牌，然后查看并弃置目标角色的一个花色的牌，治世标记越多，弃置的花色越少。"
      ],
      [
        "护驾",
        "主公技，每轮限一次，你受到伤害时，可以将伤害转给魏势力角色并令其摸牌。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E6%9B%B9%E6%93%8D",
    "images": [
      "assets/heroes/498-谋-曹操-skin-01-96e68d8edb.jpg",
      "assets/heroes/498-谋-曹操-skin-02-a7533d5fc0.png"
    ]
  },
  {
    "id": 613,
    "name": "谋·吕布",
    "faction": "群",
    "factionClass": "qun",
    "hp": "5",
    "image": "assets/heroes/613-谋-吕布-skin-01-d1d79aea1f.jpg",
    "thumb": "assets/heroes/613-谋-吕布-thumb-ccf240e52f.png",
    "intro": "字奉先，五原郡九原县人。三国第一猛将，曾独力战刘关张三人，其武力世之无双。时人语曰：“人中有吕布，马中有赤兔。”",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-613.html",
    "skills": [
      [
        "无双",
        "锁定技，你使用的【杀】需两张【闪】才能抵消；与你进行【决斗】的角色每次需打出两张【杀】。每回合限一次，若对方没有使用或打出【杀】或【闪】，则此【杀】或【决斗】对其造成的伤害+1。"
      ],
      [
        "利驭",
        "当你使用【杀】对一名其他角色造成伤害后，你可以获得其区域里的至多等同于伤害数张牌，然后其摸等量张牌。若你与其因此获得了全部类别的牌，其选择一项：令你视为对由其指定的另一名其他角色使用一张【决斗】；其获得技能“无双”直至其下个回合结束。无双：锁定技，你使用的【杀】需两张【闪】才能抵消；与你进行【决斗】的角色每次需打出两张【杀】。每回合限一次，若对方没有使用或打出【杀】或【闪】，则此【杀】或【决斗】对其造成的伤害+1。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E5%90%95%E5%B8%83",
    "images": [
      "assets/heroes/613-谋-吕布-skin-01-d1d79aea1f.jpg"
    ]
  },
  {
    "id": 590,
    "name": "谋·陆逊",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "3",
    "image": "assets/heroes/590-谋-陆逊-skin-01-bd19dcdc2c.jpg",
    "thumb": "assets/heroes/590-谋-陆逊-thumb-158322889b.png",
    "intro": "本名陆议，字伯言，吴郡吴县人。历任东吴大都督、丞相。吴大帝孙权兄孙策之婿，世代为江东大族。以谦逊之书麻痹关羽，夺取荆州，又有火烧连营大破蜀军。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-590.html",
    "skills": [
      [
        "谦逊",
        "当一张锦囊牌对你生效时，若此牌名未记录且你不是使用者，则你记录之，然后可将至多X张牌置于你的武将牌上（X为“谦逊”记录的牌名数且至多为5）；若如此做，此回合结束时，你获得武将牌上的所有牌。出牌阶段开始时，你可移去一个记录的牌名，若为普通锦囊牌的牌名，则你可视为使用此牌。"
      ],
      [
        "连营",
        "身份、团战：其他角色的回合结束时，你可观看牌堆顶的x张牌，然后将这些牌交给任意角色（x为你本回合失去的牌数，且至多为5）。斗地主：其他角色的回合结束时，你可观看牌堆顶的x张牌，然后将这些牌交给任意角色（x为你本回合失去的牌数+1，且至多为5）。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E9%99%86%E9%80%8A",
    "images": [
      "assets/heroes/590-谋-陆逊-skin-01-bd19dcdc2c.jpg"
    ]
  },
  {
    "id": 656,
    "name": "谋·田豫",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "4",
    "image": "assets/heroes/656-谋-田豫-skin-01-03f2983521.jpg",
    "thumb": "assets/heroes/656-谋-田豫-thumb-6f8e7a87c3.png",
    "intro": "田豫之镇边塞，不恃强攻，而明察胡族利异，以官爵分其势，借互市弱其盟。马城被围，能观敌阵之隙，设疑兵于南，率锐卒溃围于北，反戈破敌。其谋在庙堂，已定远人之争；其略在塞外，能于绝境制胜。虽无赫赫战功，然北境宁息数十载，诚以智御边之典范。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-656.html",
    "skills": [
      [
        "震袭",
        "每回合限一次，你使用【杀】指定目标后，可选择一项：1. 弃置其至多X张手牌（X为你与其的距离）；2. 移动其场上的一张牌。背水：其体力值为全场最高或大于你时方可选择。"
      ],
      [
        "扬师",
        "锁定技，你受到伤害后，若你攻击范围内包含所有其他角色，你从牌堆中获得一张【杀】；否则你攻击范围+1。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E7%94%B0%E8%B1%AB",
    "images": [
      "assets/heroes/656-谋-田豫-skin-01-03f2983521.jpg"
    ]
  },
  {
    "id": 654,
    "name": "谋·张郃",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "4",
    "image": "assets/heroes/654-谋-张郃-skin-01-62fd1e5439.jpg",
    "thumb": "assets/heroes/654-谋-张郃-thumb-5f89a56f48.png",
    "intro": "张郃善用常兵，以地制宜。街亭之役，蜀军据山求险，张郃乃断其水道，围而不攻，待其自溃。其智在策外，能辨攻守之机；其略在疆场，可尽地物之利。不用云梯之巧，不恃虎豹之锐，然尽扼要害，终破居高之势。故能化险阻为坦途，转常卒为奇兵，诚魏之巧变良将。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-654.html",
    "skills": [
      [
        "巧变",
        "准备阶段，你可弃置任意区域内各一张牌，跳过等量个阶段，并于对应阶段跳过后执行相应效果。若你以此法跳过：1.摸牌阶段：你可获得至多两名其他角色各一张手牌；2.出牌阶段：你可移动场上一张牌，然后若你牌数未增加，你可令因此场上牌数增加的角色摸两张牌；3.弃牌阶段：你摸一张牌，结束阶段，若你手牌数大于等于场上角色数，你于之后执行一个额外的出牌阶段。"
      ],
      [
        "料势",
        "每回合限一次，你可将因“巧变”获得的牌当【杀】或【闪】使用或打出。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%BC%A0%E9%83%83",
    "images": [
      "assets/heroes/654-谋-张郃-skin-01-62fd1e5439.jpg"
    ]
  },
  {
    "id": 652,
    "name": "谋·朱然",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/652-谋-朱然-skin-01-b796b4f14d.jpg",
    "thumb": "assets/heroes/652-谋-朱然-thumb-4941c79b9b.png",
    "intro": "朱然处孤城之危，履绝境之艰，凝众志之同。分余粮以励饥卒，同甘苦于困顿；焚舟楫而固死志，共决绝于存亡。值魏军疫作，乃开城突击：东举火惑敌，西精甲破阵。由是孤城得全，众志愈坚。谋固于上下同欲，攻成于将士一心，可谓甘苦与共，生死相随。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-652.html",
    "skills": [
      [
        "镇围",
        "出牌阶段限一次，你可与一名其他角色同时选择是否弃置任意张牌。然后你可执行至多X项（X为你弃置牌大于等于其的条件数：1.牌数；2.花色数）：1.对其造成1点伤害；2.摸三张牌。"
      ],
      [
        "合援",
        "每名角色限一次，结束阶段，你可选择一名已受伤角色并弃置X张牌（X为你上次发动镇围时弃置的牌数），令其执行上次“镇围”执行的最后一项，且此后你对除其以外的角色发动“镇围”时，该角色也可选择弃置牌（视为你弃置的牌）。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E6%9C%B1%E7%84%B6",
    "images": [
      "assets/heroes/652-谋-朱然-skin-01-b796b4f14d.jpg"
    ]
  },
  {
    "id": 514,
    "name": "谋·黄盖",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/514-谋-黄盖-skin-01-91fd758247.jpg",
    "thumb": "assets/heroes/514-谋-黄盖-thumb-789dd3a37d.jpg",
    "intro": "字公覆，零陵郡泉陵县人。官至偏将军、武陵太守。以苦肉计骗曹孟德，亲往诈降，火烧战船，重创敌军。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-514.html",
    "skills": [
      [
        "苦肉",
        "出牌阶段开始时，你可以交给其他角色一张牌，然后失去1点体力（若你交出的牌是【桃】或【酒】，则改为失去2点体力）。当你失去1点体力后，你获得2点护甲。"
      ],
      [
        "诈降",
        "锁定技，你于每个回合使用的前X张牌无距离和次数限制且不可被响应。摸牌阶段，你多摸X张牌。（X为你已损失体力值）"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E9%BB%84%E7%9B%96",
    "images": [
      "assets/heroes/514-谋-黄盖-skin-01-91fd758247.jpg"
    ]
  },
  {
    "id": 513,
    "name": "谋·甘宁",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/513-谋-甘宁-skin-01-0c3489a8fc.jpg",
    "thumb": "assets/heroes/513-谋-甘宁-thumb-ece712727a.jpg",
    "intro": "字兴霸，巴郡临江人，祖籍荆州南阳郡。为人勇猛刚强，忠心耿耿，勇往无前。曾带兵百人于二更奇袭曹营，大挫其锐气。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-513.html",
    "skills": [
      [
        "奇袭",
        "出牌阶段限一次，你可以选择一名其他角色，令其猜测你手牌中某种花色的牌最多（或之一）。若其猜错，你可令其再次猜测（其无法选择此阶段已猜测过的花色）；否则你展示所有手牌。然后你弃置其区域内X张牌。（X为其此阶段猜错的次数，若不足则全弃）"
      ],
      [
        "奋威",
        "限定技，出牌阶段，你可以将至多三张牌置于任意名角色的武将牌上（每名角色各一张），称为“威”，然后你摸等量的牌。有“威”的角色成为锦囊牌的目标时，你须选择一项：1.令其获得“威”牌；2.弃置其“威”牌，取消其作为此锦囊牌的目标。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E7%94%98%E5%AE%81",
    "images": [
      "assets/heroes/513-谋-甘宁-skin-01-0c3489a8fc.jpg"
    ]
  },
  {
    "id": 561,
    "name": "谋·孙策",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/561-谋-孙策-skin-01-b4017e2ce8.jpg",
    "thumb": "assets/heroes/561-谋-孙策-thumb-be21ac842f.jpg",
    "intro": "字伯符，吴郡富春人。孙坚长子，孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，三国时期吴国的奠基者。三国演义中绰号“小霸王”，统一江东。在一次狩猎中为刺客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-561.html",
    "skills": [
      [
        "激昂",
        "一级：你使用【决斗】可以额外指定一名目标，若如此做，你流失1点体力。当你使用【决斗】或红色【杀】指定一名目标后，或成为【决斗】或红色【杀】的目标后，你摸一张牌。出牌阶段限一次，你可以将所有手牌当【决斗】使用。二级：你使用【决斗】可以额外指定一名目标，若如此做，你流失1点体力。当你使用【决斗】或红色【杀】指定一名目标后，或成为【决斗】或红色【杀】的目标后，你摸一张牌。出牌阶段限X次（X为场上吴势力角色数），你可以将所有手牌当【决斗】使用。"
      ],
      [
        "魂姿",
        "觉醒技，你脱离濒死状态时，你减1点体力上限、获得1点护甲、摸三张牌，然后获得技能“英姿※”和“英魂※”。英姿：摸牌阶段，你可以多摸一张牌。英魂：准备阶段，若你已受伤，你可以选择一名其他角色并选择一项：1.令其摸X张牌，然后弃置一张牌；2.令其摸一张牌，然后弃置X张牌（X为你已损失的体力值）。"
      ],
      [
        "制霸",
        "主公技，限定技，当你进入濒死状态时，你可回复X点体力（X为场上吴势力角色数量-1）并升级技能“激昂”，然后其他吴势力角色依次受到1点无来源伤害，若其因此伤害死亡，则其死亡后，你摸三张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%AD%99%E7%AD%96",
    "images": [
      "assets/heroes/561-谋-孙策-skin-01-b4017e2ce8.jpg"
    ]
  },
  {
    "id": 509,
    "name": "谋·刘备",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "4",
    "image": "assets/heroes/509-谋-刘备-skin-01-aca9e8cf18.jpg",
    "thumb": "assets/heroes/509-谋-刘备-thumb-ac4e599440.jpg",
    "intro": "刘备，字玄德，东汉末年幽州涿[zhuō]郡涿[zhuō]县人，西汉中山靖王刘胜的后代，三国时期蜀汉开国皇帝，政治家，史家又称他为先主。公元223年，刘备病逝于白帝城，终年63岁，谥号昭烈皇帝，庙号烈祖，葬惠陵。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-509.html",
    "skills": [
      [
        "仁德",
        "出牌阶段开始时，你获得2个“仁望”标记。出牌阶段，你可以将任意张牌交给一名本阶段未获得过“仁德”牌的其他角色，然后你获得等量的“仁望”标记（你至多拥有8个“仁望”标记）。每回合限一次，当你需要使用或打出一张基本牌时，你可以弃置2个“仁望”标记视为使用或打出之。"
      ],
      [
        "章武",
        "限定技，出牌阶段，你可以令本局游戏中所有获得过“仁德”牌的角色依次交给你Y张牌（Y为游戏轮数-1，且最大为3），若如此做，你回复3点体力，然后失去“仁德”。"
      ],
      [
        "激将",
        "主公技，出牌阶段结束时，你可指定一名角色，并令另一名攻击范围内含有该角色且体力值不小于你的其他蜀势力角色选择一项：1.视为对你指定的角色使用一张普通【杀】；2.跳过下一个出牌阶段。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%88%98%E5%A4%87",
    "images": [
      "assets/heroes/509-谋-刘备-skin-01-aca9e8cf18.jpg"
    ]
  },
  {
    "id": 511,
    "name": "谋·法正",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "3",
    "image": "assets/heroes/511-谋-法正-skin-01-d6324f14ed.jpg",
    "thumb": "assets/heroes/511-谋-法正-thumb-9a29134aaf.jpg",
    "intro": "字孝直，本为刘璋部下，刘备围成都时劝说刘璋投降，而后又与刘备进取汉中，献计将曹操大将夏侯渊斩首。法正善奇谋，深受刘备信任和敬重。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-511.html",
    "skills": [
      [
        "眩惑",
        "出牌阶段限一次，你可以交给一名没有“眩”标记的其他角色一张牌并令其获得“眩”标记。有“眩”标记的角色于摸牌阶段外获得牌时，你随机获得其一张手牌（每个“眩”标记最多令你获得五张牌）。"
      ],
      [
        "恩怨",
        "锁定技，准备阶段，你令有“眩”标记的角色执行以下效果：自其获得“眩”标记开始，若你获得其至少三张牌，则你移除其“眩”标记，然后交给其三张牌；否则其流失1点体力值，然后你回复1点体力并移除其“眩”标记。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E6%B3%95%E6%AD%A3",
    "images": [
      "assets/heroes/511-谋-法正-skin-01-d6324f14ed.jpg"
    ]
  },
  {
    "id": 512,
    "name": "谋·陈宫",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/512-谋-陈宫-skin-01-5e4ef63e72.jpg",
    "thumb": "assets/heroes/512-谋-陈宫-thumb-eda61c0e39.jpg",
    "intro": "陈宫，字公台，东汉末年吕布帐下谋士，东郡东武阳人。性情刚直，足智多谋，年少时与海内知名之士相互结交。192年，陈宫等人主张曹操接任兖州牧。但此后陈宫因曹操杀害边让而与曹操反目，并游说张邈[miǎo]等人背叛曹操迎吕布入兖州，辅助吕布攻打曹操。吕布战败后，随吕布等一同被曹操所擒，决意赴死。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-512.html",
    "skills": [
      [
        "明策",
        "出牌阶段限一次，你可以将一张牌交给一名其他角色，然后其选择一项：1. 其流失1点体力，你摸两张牌并获得一个“策”标记；2.其摸一张牌。出牌阶段开始时，若你拥有“策”标记，你可以选择一名其他角色，对其造成X点伤害并移除所有“策”标记（X为你拥有的“策”标记数量）。"
      ],
      [
        "智迟",
        "锁定技，当你受到伤害后，本回合接下来你受到伤害时，防止之。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E9%99%88%E5%AE%AB",
    "images": [
      "assets/heroes/512-谋-陈宫-skin-01-5e4ef63e72.jpg"
    ]
  },
  {
    "id": 508,
    "name": "谋·庞统",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "3",
    "image": "assets/heroes/508-谋-庞统-skin-01-28fcb965d7.jpg",
    "thumb": "assets/heroes/508-谋-庞统-thumb-1ed35f7e63.jpg",
    "intro": "",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-508.html",
    "skills": [
      [
        "连环",
        "一级：出牌阶段，你可以将一张梅花手牌当【铁索连环】使用（每个出牌阶段限1次），或重铸一张梅花手牌。你使用【铁索连环】时，你可以失去一点体力，若如此做，你指定一名角色为目标后，若其不处于连环状态，随机弃置其一张手牌。二级：出牌阶段，你可以将一张梅花手牌当【铁索连环】使用（每个出牌阶段限1次），或重铸一张梅花手牌。你使用【铁索连环】可以额外指定任意名目标。你使用【铁索连环】指定一名角色为目标后，若其不处于连环状态，随机弃置其一张手牌。"
      ],
      [
        "涅槃",
        "限定技，当你处于濒死状态时，你可以弃置区域里的所有牌，摸两张牌，将体力回复至2点，复原武将牌，并升级“连环”。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%BA%9E%E7%BB%9F",
    "images": [
      "assets/heroes/508-谋-庞统-skin-01-28fcb965d7.jpg"
    ]
  },
  {
    "id": 571,
    "name": "谋·诸葛亮",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "3",
    "image": "assets/heroes/571-谋-诸葛亮-skin-01-74e2007058.jpg",
    "thumb": "assets/heroes/571-谋-诸葛亮-thumb-43fed800d7.png",
    "intro": "字孔明，号卧龙，琅琊[láng yá]阳都人，蜀汉丞相。在世时被封为武乡侯，谥曰忠武侯。著有《出师表》、《诫子书》等。怀不世之才，以空城戏司马，能观星象而通鬼神。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-571.html",
    "skills": [
      [
        "火计",
        "使命技，出牌阶段限一次，你可以选择一名其他角色，对其及其同势力的其他角色各造成1点火焰伤害。成功：准备阶段，若你本局游戏对其他角色造成过至少X点火焰伤害（X为本局游戏人数），你失去“火计”和“看破”，获得“观星※”和“空城※”。观星：准备阶段，你移去所有的“星”，并将牌堆顶的X张牌置于武将牌上（X为7-此前此技能准备阶段发动次数的三倍），称为“星”。然后你可以将任意张“星”牌置于牌堆顶。结束阶段，若你未于准备阶段将“星”牌置于牌堆顶，则你可以将任意张“星”牌置于牌堆顶。当你需要使用或打出手牌时，你可以将“星”视为你的牌使用或打出。空城：锁定技，当你受到伤害时，若你有技能“观星”且你的武将牌上有“星”，你进行一次判定，若判定结果点数小于等于你“星”牌的数量，则此伤害-1；若你有技能“观星”且你武将牌上没有“星”，你受到的伤害+1。失败：成功达成使命前，进入濒死状态。"
      ],
      [
        "看破",
        "看破：每轮开始时，你清除“看破”记录的牌名，然后你可以选择并记录任意个数的牌名（不可选择上次发动此技能记录过的牌名；每局游戏最多记录4个牌名，若为斗地主和排位赛模式则修改为2）。其他角色使用与你记录牌名相同的牌时，你可以移除一个对应牌名的记录，然后令此牌无效，且你摸一张牌。"
      ],
      [
        "观星",
        "观星：准备阶段，你移去所有的“星”，并将牌堆顶的X张牌置于武将牌上（X为7-此前此技能准备阶段发动次数的三倍），称为“星”。然后你可以将任意张“星”牌置于牌堆顶。结束阶段，若你未于准备阶段将“星”牌置于牌堆顶，则你可以将任意张“星”牌置于牌堆顶。当你需要使用或打出手牌时，你可以将“星”视为你的牌使用或打出。"
      ],
      [
        "空城",
        "空城：锁定技，当你受到伤害时，若你有技能“观星”且你的武将牌上有“星”，你进行一次判定，若判定结果点数小于等于你“星”牌的数量，则此伤害-1；若你有技能“观星”且你武将牌上没有“星”，你受到的伤害+1。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E8%AF%B8%E8%91%9B%E4%BA%AE",
    "images": [
      "assets/heroes/571-谋-诸葛亮-skin-01-74e2007058.jpg"
    ]
  },
  {
    "id": 587,
    "name": "谋·公孙瓒",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/587-谋-公孙瓒-skin-01-a956186119.jpg",
    "thumb": "assets/heroes/587-谋-公孙瓒-thumb-113a1ea55f.jpg",
    "intro": "字伯珪[guī]，汉族，号“白马义从”。辽西令支人。东汉末年献帝年间占据幽州一带的军阀，汉末群雄之一。出身贵族，因母地位卑贱，只当了郡中小吏。他貌美，声音洪亮，机智善辩。后随卢植于缑[gōu]氏山中读书，粗通经传。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-587.html",
    "skills": [
      [
        "义从",
        "蓄力技（2/4）。每轮开始时，你可消耗至多x点蓄力点并选择一项：直至本轮结束，你与其他角色距离-1，并将牌堆中的x张【杀】置于武将牌上，称为“扈”；直至本轮结束，其他角色与你距离+1，并将牌堆中的x张【闪】置于武将牌上，称为“扈”。你至多拥有四张“扈”，当你需要使用或打出手牌时，你可以将”扈”视为你的牌使用或打出。"
      ],
      [
        "趫猛",
        "你使用【杀】对一名角色造成伤害后，若你拥有技能“义从”，你可选择一项：1.弃置其区域内的一张牌并摸一张牌 2.获得3蓄力点。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%85%AC%E5%AD%99%E7%93%92",
    "images": [
      "assets/heroes/587-谋-公孙瓒-skin-01-a956186119.jpg"
    ]
  },
  {
    "id": 453,
    "name": "谋·马超",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "4",
    "image": "assets/heroes/453-谋-马超-skin-01-c3b582e057.jpg",
    "thumb": "assets/heroes/453-谋-马超-thumb-2c2fb099eb.png",
    "intro": "马腾之子，少年成名，曹操曾多次征召马超入京为官，但都被马超拒绝。而后马腾入京被封为卫尉，马超就统领了马騰的部队。刘备攻打刘璋时，马超投降刘备，与刘备军合围成都，汉中之战后联名上书尊刘备为汉中王。蜀汉建立后，马超官至骠骑将军、鰲乡侯。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-453.html",
    "skills": [
      [
        "铁骑",
        "使用杀指定的目标角色，非锁定技失效，不能使用闪响应此杀，通过谋弈获得牌或摸牌"
      ],
      [
        "马术",
        "你计算与其他角色的距离-1。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E9%A9%AC%E8%B6%85",
    "images": [
      "assets/heroes/453-谋-马超-skin-01-c3b582e057.jpg"
    ]
  },
  {
    "id": 455,
    "name": "谋·赵云",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "4",
    "image": "assets/heroes/455-谋-赵云-skin-01-13a1ab98fa.jpg",
    "thumb": "assets/heroes/455-谋-赵云-thumb-e759e15a67.png",
    "intro": "字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云:“子龙一身都是胆也”",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-455.html",
    "skills": [
      [
        "龙胆",
        "剩余可用X次（×初始为1且最大为3，每名角色的回合结束后X加1)，你可以将一张【杀】当【闪】、【闪】当普通【杀】使用或打出，若如此做,你摸一张牌。"
      ],
      [
        "积著",
        "准备阶段,你可以选择一名其他角色，与其进行“协力”。其回合结束后，若你与其“协力”成功，则直到你的下个回合结束后，你修改龙胆为“剩余可用次数×次（×初始为1且最大为3，每名角色的回合结束后X加一），你可以将一张基本牌当做任意基本牌使用或打出，若如此做，你摸一张牌”。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E8%B5%B5%E4%BA%91",
    "images": [
      "assets/heroes/455-谋-赵云-skin-01-13a1ab98fa.jpg",
      "assets/heroes/455-谋-赵云-skin-02-bdb040efea.jpg",
      "assets/heroes/455-谋-赵云-skin-03-6492165047.jpg",
      "assets/heroes/455-谋-赵云-skin-04-f145cf74a0.jpg",
      "assets/heroes/455-谋-赵云-skin-05-d6ba1267c5.jpg",
      "assets/heroes/455-谋-赵云-skin-06-0cb95c3040.jpg",
      "assets/heroes/455-谋-赵云-skin-07-ccf2922d11.jpg"
    ]
  },
  {
    "id": 506,
    "name": "谋·貂蝉",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/506-谋-貂蝉-skin-01-9018f69720.jpg",
    "thumb": "assets/heroes/506-谋-貂蝉-thumb-0416e7b308.jpg",
    "intro": "中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-506.html",
    "skills": [
      [
        "离间",
        "出牌阶段限一次，你可以选择至少两名其他角色并弃置X张牌（X为你选择的角色数-1），然后他们依次对逆时针最近座次的你选择的另一名角色视为使用一张【决斗】。"
      ],
      [
        "闭月",
        "锁定技，结束阶段，你摸X张牌。（X为本回合受到伤害的角色数+1，至多为4）"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E8%B2%82%E8%9D%89",
    "images": [
      "assets/heroes/506-谋-貂蝉-skin-01-9018f69720.jpg",
      "assets/heroes/506-谋-貂蝉-skin-02-忧君难寐-edc92e74f9.jpg",
      "assets/heroes/506-谋-貂蝉-skin-03-舞惑群心-dynamic.gif",
      "assets/heroes/506-谋-貂蝉-skin-04-绝世倾城-static.jpg"
    ]
  },
  {
    "id": 577,
    "name": "谋·黄月英",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "3",
    "image": "assets/heroes/577-谋-黄月英-skin-01-d074cbce5d.jpg",
    "thumb": "assets/heroes/577-谋-黄月英-thumb-bfa4fb464f.png",
    "intro": "荆州沔[miǎn]南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-577.html",
    "skills": [
      [
        "集智",
        "锁定技，当你使用一张普通锦囊牌时，你摸一张牌。以此法获得的牌本回合不计入手牌上限。"
      ],
      [
        "奇才",
        "（身份场、团战类）你使用锦囊牌没有距离限制。出牌阶段限一次，你可以选择一名其他角色，将手牌或弃牌堆中的一张装备牌置入其装备区，然后其获得“奇”标记。拥有“奇”标记的角色接下来获得的三张普通锦囊牌须交给你。（斗地主）你使用锦囊牌没有距离限制。出牌阶段限一次，你可以选择一名其他角色，将手牌或弃牌堆中一张防具牌置入其装备区（每局游戏每个防具名限一次），然后其获得“奇”标记。拥有“奇”标记的角色接下来获得的三张普通锦囊牌须交给你。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E9%BB%84%E6%9C%88%E8%8B%B1",
    "images": [
      "assets/heroes/577-谋-黄月英-skin-01-d074cbce5d.jpg"
    ]
  },
  {
    "id": 583,
    "name": "谋·夏侯惇",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "4",
    "image": "assets/heroes/583-谋-夏侯惇-skin-01-15d7d73832.jpg",
    "thumb": "assets/heroes/583-谋-夏侯惇-thumb-b977ba4760.png",
    "intro": "夏侯惇（？－220年），字元让，沛国谯（今安徽亳州）人，曹魏开国元勋，西汉开国元勋夏侯婴的后代。少年时以勇气闻名于乡里人，“有辱其师者，惇杀之，由是以烈气闻”。曹操起兵时，夏侯惇是其最早追随的将领之一，多次为曹操镇守后方，从征吕布时，左目为流矢所中。曾率军民阻断太寿河水，筑陂塘灌溉农田，使百姓受益，功勋卓著。平时深受曹操倚重，“召惇常与同载，特见亲重，出入卧内，诸将莫得比也”。历任折冲校尉、济阴太守、建武将军，官至大将军，封高安乡侯，死后追谥忠侯。夏侯惇一生虽多在军旅，但仍不忘治学，他常亲自迎师，虚心求教。他为人清俭，所得赏赐全部分给将士，一生不置产业，至死家无余财。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-583.html",
    "skills": [
      [
        "刚烈",
        "出牌阶段限一次，你可以选择任意名本局游戏中对你造成过伤害的角色，对其造成2点伤害。（每局每名角色限一次）。"
      ],
      [
        "清俭",
        "锁定技。当一张牌非因使用而进入弃牌堆时，若你的“清俭”牌不足X张（X为你的体力值-1，至少为1），你将之置于你的武将牌上，称为“清俭”牌；出牌阶段结束时，你将这些牌分配给任意角色。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%A4%8F%E4%BE%AF%E6%83%87",
    "images": [
      "assets/heroes/583-谋-夏侯惇-skin-01-15d7d73832.jpg"
    ]
  },
  {
    "id": 493,
    "name": "谋·孙尚香",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "4",
    "image": "assets/heroes/493-谋-孙尚香-skin-01-af53eba1e5.jpg",
    "thumb": "assets/heroes/493-谋-孙尚香-thumb-06fcbe55b8.jpg",
    "intro": "孙夫人，乃孙权之妹。刘备定荆州，孙权进妹与其结姻，重固盟好。孙夫人才捷刚猛，有诸兄之风。后人为其立庙，号曰“枭[xiāo]姬庙”。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-493.html",
    "skills": [
      [
        "结姻",
        "使命技，你的登场势力为“蜀”。游戏开始时，你选择一名其他角色，令其获得“助”标记。出牌阶段开始时，有“助”标记的角色选择一项：1. 若其有手牌，交给你两张手牌（若其手牌不足两张则交给你所有手牌），然后其获得一点“护甲”；2、令你移动或移除助标记（若其不是第一次获得“助”标记，则你只能移除“助”标记。）失败：当“助”标记被移除时，你回复1点体力并获得你武将牌上所有“妆”牌，移除“助”标记，你将势力修改为“吴”，减1点体力上限。"
      ],
      [
        "良助",
        "蜀势力技，出牌阶段限一次，你可以将其他角色装备区内的一张牌置于你的武将牌上，称为“妆”，然后令拥有“助”标记的角色选择一项：1.回复1点体力值；2.摸两张牌。"
      ],
      [
        "枭姬",
        "吴势力技，当你失去装备区内的一张牌时，你摸两张牌，然后可以弃置场上的一张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E8%B0%8B%E5%AD%99%E5%B0%9A%E9%A6%99",
    "images": [
      "assets/heroes/493-谋-孙尚香-skin-01-af53eba1e5.jpg",
      "assets/heroes/493-谋-孙尚香-skin-02-985e63b1d5.jpg",
      "assets/heroes/493-谋-孙尚香-skin-03-292865e0c7.jpg",
      "assets/heroes/493-谋-孙尚香-skin-04-1cc5bb4f0f.jpg",
      "assets/heroes/493-谋-孙尚香-skin-05-028cb5c812.jpg",
      "assets/heroes/493-谋-孙尚香-skin-06-8be5372320.jpg"
    ]
  },
  {
    "id": 160,
    "name": "界·黄盖",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/160-界-黄盖-skin-01-47a45ab0c2.jpg",
    "thumb": "assets/heroes/160-界-黄盖-thumb-fe779f6049.jpg",
    "intro": "字公覆，零陵郡泉陵县人。官至偏将军、武陵太守。以苦肉计骗曹孟德，亲往诈降，火烧战船，重创敌军。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-160.html",
    "skills": [
      [
        "苦肉",
        "出牌阶段限一次，你可以弃置一张牌，然后失去1点体力。"
      ],
      [
        "诈降",
        "锁定技，当你失去1点体力后，你摸三张牌，然后若此时在你的出牌阶段内，则直到回合结束，你使用红色【杀】无距离限制且不能被【闪】响应，且你可以多使用一张【杀】。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E9%BB%84%E7%9B%96",
    "images": [
      "assets/heroes/160-界-黄盖-skin-01-47a45ab0c2.jpg",
      "assets/heroes/160-界-黄盖-skin-02-3687f3a50a.jpg",
      "assets/heroes/160-界-黄盖-skin-03-6a531149a1.jpg",
      "assets/heroes/160-界-黄盖-skin-04-f31356de50.jpg",
      "assets/heroes/160-界-黄盖-skin-05-1f4abb0182.jpg",
      "assets/heroes/160-界-黄盖-skin-06-d73fb60278.jpg"
    ]
  },
  {
    "id": 153,
    "name": "界·关羽",
    "faction": "蜀",
    "factionClass": "shu",
    "hp": "4",
    "image": "assets/heroes/153-界-关羽-skin-01-c33ed76c59.jpg",
    "thumb": "assets/heroes/153-界-关羽-thumb-f450ec11e2.jpg",
    "intro": "字云长，本字长生，并州河东解州人。五虎上将之首，爵至汉寿亭侯，谥曰“壮缪侯”。被奉为“关圣帝君”，崇为“武圣”。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-153.html",
    "skills": [
      [
        "武圣",
        "你可以将一张红色牌当【杀】使用或打出。你使用方块【杀】无距离限制。"
      ],
      [
        "义绝",
        "出牌阶段限一次，你可以弃置一张牌，然后令一名其他角色展示一张手牌。若此牌为黑色，则其本回合非锁定技失效且不能使用或打出手牌，你对其使用的红桃【杀】伤害+1；若此牌为红色，则你获得之，然后你可令该角色回复1点体力。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E5%85%B3%E7%BE%BD",
    "images": [
      "assets/heroes/153-界-关羽-skin-01-c33ed76c59.jpg",
      "assets/heroes/153-界-关羽-skin-02-bdb018c92a.jpg",
      "assets/heroes/153-界-关羽-skin-03-78b66f3d33.jpg",
      "assets/heroes/153-界-关羽-skin-04-c12f3cf1f4.jpg",
      "assets/heroes/153-界-关羽-skin-05-a644c54230.jpg",
      "assets/heroes/153-界-关羽-skin-06-a0bbe68401.jpg",
      "assets/heroes/153-界-关羽-skin-07-75a580056c.jpg"
    ]
  },
  {
    "id": 264,
    "name": "界·荀彧",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/264-界-荀彧-skin-01-925bdf1668.jpg",
    "thumb": "assets/heroes/264-界-荀彧-thumb-dfa0d41e87.jpg",
    "intro": "荀彧[xún yù]，字文若，颍[yǐng]川颍阴（今河南许昌）人。东汉末年曹操帐下首席谋臣，杰出的战略家。自小被世人称作“王佐之才”。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-264.html",
    "skills": [
      [
        "驱虎",
        "出牌阶段限一次，你可以与一名体力值大于你的角色拼点。若你赢，该角色对其攻击范围内你选择的一名角色造成1点伤害；若你没赢，该角色对你造成1点伤害。"
      ],
      [
        "节命",
        "当你受到1点伤害后，你可以令一名角色摸两张牌，然后若其手牌数小于其体力上限，你摸一张牌。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E8%8D%80%E5%BD%A7",
    "images": [
      "assets/heroes/264-界-荀彧-skin-01-925bdf1668.jpg",
      "assets/heroes/264-界-荀彧-skin-02-fd8bf15156.jpg",
      "assets/heroes/264-界-荀彧-skin-03-042fe8f42e.jpg",
      "assets/heroes/264-界-荀彧-skin-04-721d793524.jpg",
      "assets/heroes/264-界-荀彧-skin-05-384786fae3.jpg",
      "assets/heroes/264-界-荀彧-skin-06-242b72b43a.jpg",
      "assets/heroes/264-界-荀彧-skin-07-3c4daad52d.jpg"
    ]
  },
  {
    "id": 383,
    "name": "界·李儒",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/383-界-李儒-skin-01-8dd44c0e80.jpg",
    "thumb": "assets/heroes/383-界-李儒-thumb-109ae0a8f0.png",
    "intro": "李儒[rú]董卓的首席谋士，为董卓所亲信，大小事宜皆与其商议。董卓趁乱进京、说降吕布、废立皇帝、迁都长安等举动，均离不开李儒的参谋之功，并奉命毒杀皇帝刘辩。李傕[jué]被曹操击败后，李儒从此不知所踪，消失在历史长河中。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-383.html",
    "skills": [
      [
        "绝策",
        "结束阶段，你可以对本回合失去过牌的一名其他角色造成1点伤害。"
      ],
      [
        "灭计",
        "出牌阶段限一次，你可以展示一张黑色锦囊牌并将之置于牌堆顶并令一名其他角色选择一项：交给你一张锦囊牌；或弃置两张非锦囊牌（不足则只需弃1张）。"
      ],
      [
        "焚城",
        "限定技，出牌阶段，你可以令所有其他角色依次选择一项：1.弃置至少X张牌（X为发动此技能时该角色的上家以此法弃置牌的数量+1）；2.受到你造成的2点火焰伤害。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E6%9D%8E%E5%84%92",
    "images": [
      "assets/heroes/383-界-李儒-skin-01-8dd44c0e80.jpg",
      "assets/heroes/383-界-李儒-skin-02-65ef302f68.jpg",
      "assets/heroes/383-界-李儒-skin-03-cec7e6de43.jpg",
      "assets/heroes/383-界-李儒-skin-04-ffd054796a.jpg",
      "assets/heroes/383-界-李儒-skin-05-87026422c0.jpg"
    ]
  },
  {
    "id": 389,
    "name": "界·朱然",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "4",
    "image": "assets/heroes/389-界-朱然-skin-01-f1223983d7.jpg",
    "thumb": "assets/heroes/389-界-朱然-thumb-f48dbbc549.png",
    "intro": "吴国著名将领，吕蒙白衣渡江取荆州，朱然协助潘璋捉住了关羽。黄武元年，刘备兵伐东吴，朱然与孙桓抵抗刘备大军。后又参加夷陵战役，追击刘备，被来接应的赵云一枪刺死。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-389.html",
    "skills": [
      [
        "胆守",
        "其他角色的结束阶段，若你本回合未成为过其使用牌的目标，你摸一张牌；否则你可以弃置x张牌对其造成1点伤害（x为你本回合成为其使用牌的目标次数）"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E6%9C%B1%E7%84%B6",
    "images": [
      "assets/heroes/389-界-朱然-skin-01-f1223983d7.jpg",
      "assets/heroes/389-界-朱然-skin-02-f2581bbd0c.jpg",
      "assets/heroes/389-界-朱然-skin-03-1dac909761.jpg",
      "assets/heroes/389-界-朱然-skin-04-970c77e64c.jpg",
      "assets/heroes/389-界-朱然-skin-05-741ab27674.jpg"
    ]
  },
  {
    "id": 236,
    "name": "界·孙尚香",
    "faction": "吴",
    "factionClass": "wu",
    "hp": "3",
    "image": "assets/heroes/236-界-孙尚香-skin-01-643a5c4367.jpg",
    "thumb": "assets/heroes/236-界-孙尚香-thumb-e107be60ae.jpg",
    "intro": "孙夫人，乃孙权之妹。刘备定荆州，孙权进妹与其结姻，重固盟好。孙夫人才捷刚猛，有诸兄之风。后人为其立庙，号曰“枭[xiāo]姬庙”。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-236.html",
    "skills": [
      [
        "结姻",
        "出牌阶段限一次，选择一名男性角色，弃置一张手牌或将一张装备牌置入其装备区：你与其体力值较高的角色摸一张牌，体力值较低的角色回复1点体力。"
      ],
      [
        "枭姬",
        "当你失去装备区里的一张牌时，你可以摸两张牌。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E5%AD%99%E5%B0%9A%E9%A6%99",
    "images": [
      "assets/heroes/236-界-孙尚香-skin-01-643a5c4367.jpg",
      "assets/heroes/236-界-孙尚香-skin-02-55b39b6e4b.jpg",
      "assets/heroes/236-界-孙尚香-skin-03-4a1fb99d71.jpg",
      "assets/heroes/236-界-孙尚香-skin-04-f1293c8e89.jpg",
      "assets/heroes/236-界-孙尚香-skin-05-b4641cff31.jpg",
      "assets/heroes/236-界-孙尚香-skin-06-1f44878b4b.jpg",
      "assets/heroes/236-界-孙尚香-skin-07-82a95a6632.jpg"
    ]
  },
  {
    "id": 239,
    "name": "刘焉",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/239-刘焉-skin-01-73e4ccb37b.jpg",
    "thumb": "assets/heroes/239-刘焉-thumb-7d77e91678.jpg",
    "intro": "刘焉（2世纪?－194年），字君郎，江夏竟陵（今湖北省潜江市）人，东汉末年割据军阀之一，官至阳城侯益州牧。他以州牧身份建立的割据势力为三国时代最早的一批，同时是持续时间较长的，直到214年其子刘璋向刘备投降才终结。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-239.html",
    "skills": [
      [
        "图射",
        "当你使用非装备牌指定目标后，若你没有基本牌，则你可以摸X张牌（X为此牌指定的目标数）。"
      ],
      [
        "立牧",
        "出牌阶段，你可以将一张方块牌当【乐不思蜀】对自己使用，然后回复1点体力；你的判定区有牌时，你对攻击范围内的其他角色使用牌没有次数和距离限制。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E5%88%98%E7%84%89",
    "images": [
      "assets/heroes/239-刘焉-skin-01-73e4ccb37b.jpg",
      "assets/heroes/239-刘焉-skin-02-4283b8e16d.jpg"
    ]
  },
  {
    "id": 288,
    "name": "曹婴",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "4",
    "image": "assets/heroes/288-曹婴-skin-01-2837d1c4c6.jpg",
    "thumb": "assets/heroes/288-曹婴-thumb-35062b7503.jpg",
    "intro": "曹婴是曹操的孙女，弓马娴熟，文武双全，深得曹操的用兵之道及心术。于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-288.html",
    "skills": [
      [
        "凌人",
        "出牌阶段限一次，当你使用【杀】或伤害类锦囊牌指定目标后，你可以猜测其中一个目标是否有基本牌、锦囊牌或装备牌类型的手牌。至少猜对一项则此牌对其伤害+1；至少猜对两项则你摸两张牌；猜对三项则你获得“奸雄”（当你受到伤害后，你可以获得造成此伤害的牌）和“行殇”（当其他角色死亡时，你可以获得其所有的牌）直到直到你下回合开始。"
      ],
      [
        "伏间",
        "锁定技，结束阶段，若全场角色均有手牌，你随机观看一名其他角色的X张手牌（X为全场手牌数最少的角色手牌数）。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E6%9B%B9%E5%A9%B4",
    "images": [
      "assets/heroes/288-曹婴-skin-01-2837d1c4c6.jpg",
      "assets/heroes/288-曹婴-skin-02-e74f548daf.jpg",
      "assets/heroes/288-曹婴-skin-03-6f94b811a1.jpg"
    ]
  },
  {
    "id": 303,
    "name": "曹纯",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "4",
    "image": "assets/heroes/303-曹纯-skin-01-d7f68255c5.jpg",
    "thumb": "assets/heroes/303-曹纯-thumb-d67b5d6ab3.png",
    "intro": "曹纯统虎豹之骑，骁锐为胆，缮甲为要。麾下皆天下骁锐，所向无不披靡。战则争先，退则殿后，不矜其功。斩袁谭于南皮，未以为荣；败刘备于长坂，视若寻常。唯以整军经武为务，以养锐蓄威为本。故能统骁锐之师，扬虎豹之烈，威震北疆之地。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-303.html",
    "skills": [
      [
        "缮甲",
        "出牌阶段限一次，你可摸三张牌，然后弃置X张牌（X为3-你本局失去过的装备区里的牌数），若你未因此弃置： 基本牌，你可视为使用一张不计入次数且无次数限制的普通【杀】； 锦囊牌，你本阶段使用牌无距离限制。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E6%9B%B9%E7%BA%AF",
    "images": [
      "assets/heroes/303-曹纯-skin-01-d7f68255c5.jpg",
      "assets/heroes/303-曹纯-skin-02-8c9895cb99.jpg"
    ]
  },
  {
    "id": 224,
    "name": "张让",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/224-张让-skin-01-bf8a3a6d14.jpg",
    "thumb": "assets/heroes/224-张让-thumb-bc57af7013.jpg",
    "intro": "张让（？—189年9月24日），东汉宦官，颍川（今河南禹县）人。桓帝、灵帝时，历为小黄门、中常侍等职，封列侯。在职时以搜刮暴敛、骄纵贪婪见称，灵帝极为宠信，常谓“张常侍是我父”。中平六年（189年），何进谋诛宦官，事泄，他和其余几个常侍设计伏杀何进。袁绍、袁术等人闻何进被杀，入宫杀尽宦官，张让走投无路，投水自尽。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-224.html",
    "skills": [
      [
        "滔乱",
        "你可将一张牌当做任意一张基本牌或普通锦囊牌使用（此牌不得是本局游戏你以此法使用过的牌，且场上所有角色都不能处于濒死状态），然后你令一名其他角色选择一项：1.交给你一张与你以此法使用的牌类别不同的牌；2.你失去1点体力，然后“滔乱”无效直到回合结束。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E5%BC%A0%E8%AE%A9",
    "images": [
      "assets/heroes/224-张让-skin-01-bf8a3a6d14.jpg",
      "assets/heroes/224-张让-skin-02-2b75a0e77d.jpg"
    ]
  },
  {
    "id": 604,
    "name": "友·诸葛亮",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/604-友-诸葛亮-skin-01-67ac37b157.jpg",
    "thumb": "assets/heroes/604-友-诸葛亮-thumb-395d08309c.png",
    "intro": "诸葛亮（181年—234年10月8日），字孔明，号卧龙，琅琊阳都（今山东省沂南县）人 ，三国时期蜀汉丞相，中国古代杰出的政治家、军事家、战略家 、发明家、文学家。诸葛亮早年随叔父诸葛玄到荆州，诸葛玄死后，诸葛亮躬耕于南阳。 刘备依附荆州刘表时三顾茅庐，诸葛亮向刘备提出占据荆州、益州，联合孙权共同对抗曹操的《隆中对》，刘备根据诸葛亮的策略，成功占领荆州、益州之地，与孙权、曹操形成三足鼎立之势。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-604.html",
    "skills": [
      [
        "演策",
        "每轮限一次，首轮开始时，或准备阶段，你可以选择一项：从牌堆中随机获得一张锦囊牌；执行“卧龙演策”。若你执行“卧龙演策”，当一张牌被使用时，若此牌的类别或颜色与你的预测相同，你摸一张牌（每次执行“卧龙演策”至多因此摸五张牌）。当本次“卧龙演策”的预测全部验证后，或当你再次执行“卧龙演策”时，若你本次“卧龙演策”正确的预测数量：为0，你失去1点体力，此后“卧龙演策”可预测的牌数-1；不足一半，你弃置两张牌；至少一半（向上取整），你根据本次预测的方式，从牌堆中获得一张符合你声明条件的牌；全部正确，你摸两张牌，此后“卧龙演策”可预测的牌数+1（至多为7）。"
      ],
      [
        "方遒",
        "限定技，当你执行“卧龙演策”后，你可以展示你的“卧龙演策”预测，若如此做，本次“卧龙演策”的预测全部验证后，执行效果的值均+1，然后若卧龙演策预测的牌数大于3且预测全部正确，该技能可以再次发动。"
      ],
      [
        "共砺",
        "身份：此模式无效排位、斗地主：锁定技，若友庞统在场且与你阵营一致，你执行“卧龙演策”可预测的牌数+1；若友徐庶在场且与你阵营一致，你“卧龙演策”预测的第一张牌的结果视为正确。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E5%8F%8B%E8%AF%B8%E8%91%9B%E4%BA%AE",
    "images": [
      "assets/heroes/604-友-诸葛亮-skin-01-67ac37b157.jpg"
    ]
  },
  {
    "id": 570,
    "name": "鲍信",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/570-鲍信-skin-01-2bbc7b9d65.jpg",
    "thumb": "assets/heroes/570-鲍信-skin-01-2bbc7b9d65.jpg",
    "intro": "鲍信(151年-192年)，字允诚(仅见《三国志通俗演义》，正史无记载)，泰山平阳(今山东新泰)人。东汉末年济北相，讨伐董卓的诸路人马之一。",
    "source": "https://www.sanguosha.cn/pc/hero-detail-570.html",
    "skills": [
      [
        "募讨",
        "出牌阶段限一次，你可以选择一名角色，令其将手牌中所有的【杀】置于其武将牌上，然后其依次将这些【杀】随机交给由其下家开始的每一名角色，然后其对最后一名角色造成X点伤害（X为最后一名角色手牌中【杀】的数量且至多为2）。"
      ],
      [
        "毅谋",
        "当与你距离1以内的角色受到伤害后，你可以选择一项：1.令其随机获得牌堆中的一张【杀】；2.令其将一张手牌交给另一名角色，然后其摸一张牌。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E9%B2%8D%E4%BF%A1",
    "images": [
      "assets/heroes/570-鲍信-skin-01-2bbc7b9d65.jpg"
    ]
  },
  {
    "id": 388,
    "name": "羊徽瑜",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/388-羊徽瑜-skin-01-3bdd56205a.jpg",
    "thumb": "assets/heroes/388-羊徽瑜-skin-01-3bdd56205a.jpg",
    "intro": "羊徽瑜（214年－278年），司马师第三任妻子。羊徽瑜出身官宦世家，聪慧贤德，嫁给司马师后未有子女。以司马师之弟司马昭的次子司马攸为继子。司马师死后，司马攸侍奉羊徽瑜非常孝顺。咸宁四年（278年），羊徽瑜去世，时年六十五岁，谥号景献皇后，与司马师合葬峻平陵",
    "source": "https://www.sanguosha.cn/pc/hero-detail-388.html",
    "skills": [
      [
        "弘仪",
        "出牌阶段限一次，你可以指定一名其他角色，直至你的下个回合开始时，该角色造成伤害时进行一次判定：若为红色则受伤角色摸一张牌；若为黑色则此伤害-1。"
      ],
      [
        "劝封",
        "限定技，当一名其他角色死亡后，你可以失去技能“弘仪”，然后获得其武将牌的所有技能（主公技除外），若如此做，你加1点体力上限，回复1点体力。当你处于濒死状态时，你可以加2点体力上限，回复4体力。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E7%BE%8A%E5%BE%BD%E7%91%9C",
    "images": [
      "assets/heroes/388-羊徽瑜-skin-01-3bdd56205a.jpg",
      "assets/heroes/388-羊徽瑜-skin-02-c8c2829925.jpg"
    ]
  },
  {
    "id": 473,
    "name": "阮慧",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/473-阮慧-skin-01-fcf3d4fe3e.jpg",
    "thumb": "assets/heroes/473-阮慧-skin-01-fcf3d4fe3e.jpg",
    "intro": "阮氏女，曹魏名士许允之妻，中国古代四大丑女之一，貌丑而见识非凡。",
    "source": "https://www.sanguosha.cn/pc/hero-detail-473.html",
    "skills": [
      [
        "明察",
        "摸牌阶段开始时，你亮出牌堆顶的三张牌，然后你可以获得其中点数不大于8的牌并放弃摸牌。若你以此法获得了牌，你选择一名其他角色，随机获得其一张牌。"
      ],
      [
        "敬重",
        "弃牌阶段结束时，若你本阶段弃置过至少两张黑色牌，你可以选择一名其他角色。当其于其下个回合的出牌阶段内使用牌结算结束后，若此牌在弃牌堆内，你获得之（每阶段以此法至多获得三次牌）。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E9%98%AE%E6%85%A7",
    "images": [
      "assets/heroes/473-阮慧-skin-01-fcf3d4fe3e.jpg"
    ]
  },
  {
    "id": 428,
    "name": "崔琰",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/428-崔琰-skin-01-59af82b535.jpg",
    "thumb": "assets/heroes/428-崔琰-skin-01-59af82b535.jpg",
    "intro": "崔琰（？—216年），字季珪，清河郡东武城（今河北省衡水市故城县）人。东汉末年名士，司空崔林从兄，丞相曹操谋士。",
    "source": "https://www.sanguosha.cn/pc/hero-detail-428.html",
    "skills": [
      [
        "雅俊",
        "摸牌阶段，你多摸一张牌。出牌阶段开始时，你可以用本回合获得的一张牌与一名其他角色进行拼点。若你赢，你可以将其中一张拼点牌置于牌堆顶；若你没赢，你本回合手牌上限-1。"
      ],
      [
        "尊嫡",
        "出牌阶段限一次，你可以弃置一张手牌并选择一名角色，然后你进行判定：黑色，其摸三张牌；红色，其可以移动场上一张牌。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E5%B4%94%E7%90%B0",
    "images": [
      "assets/heroes/428-崔琰-skin-01-59af82b535.jpg",
      "assets/heroes/428-崔琰-skin-02-6c63c3ba2b.jpg"
    ]
  },
  {
    "id": 562,
    "name": "郭女王",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/562-郭女王-skin-01-75a2934ee4.jpg",
    "thumb": "assets/heroes/562-郭女王-skin-01-75a2934ee4.jpg",
    "intro": "文德郭皇后（184年4月8日－235年3月14日），名不详，字女王，安平郡广宗县（今河北广宗）人，东汉南郡太守郭永之次女，魏文帝曹丕的皇后。郭氏少年秀慧，父亲郭永奇之曰：“此乃我女中王也。”遂以女王为字。",
    "source": "https://www.sanguosha.cn/hero-detail-562.html",
    "skills": [
      [
        "易宠",
        "准备阶段，你可以选择一名其他角色并指定一种花色，获得其所有该花色的牌，并直到你下个回合开始令其获得“雀”标记（若场上已有“雀”标记，则转移给该角色）。拥有“雀”标记的角色获得下一张你指定花色的牌时，你获得此牌。"
      ],
      [
        "诬诽",
        "你的【杀】或伤害类普通锦囊即将造成的伤害，视为由拥有“雀”标记的角色作为伤害来源造成的。你受到伤害后，若拥有“雀”的角色体力值大于3，你可以令其受到1点无来源伤害。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E9%83%AD%E5%A5%B3%E7%8E%8B",
    "images": [
      "assets/heroes/562-郭女王-skin-01-75a2934ee4.jpg"
    ]
  },
  {
    "id": 436,
    "name": "星黄忠",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/436-星黄忠-skin-01-4048a3e6ec.jpg",
    "thumb": "assets/heroes/436-星黄忠-skin-01-4048a3e6ec.jpg",
    "intro": "黄忠（？－220年），字汉升（一作“汉叔” ），南阳（今河南南阳）人。建安十三年，曹操挥师南下，降下荆州后，以黄忠代理裨将军，在长沙郡仕官，归长沙太守韩玄统属。刘备于赤壁之战大获全胜，趁机夺取江南四郡，时黄忠镇守长沙郡，关羽率五百校刀手来攻，与黄忠大战一百回合不分胜负，第二天关羽用拖刀计时，黄忠马失前蹄，跌落在地，关羽大义释之。次日，黄忠计诱关羽，为报关羽不杀之恩，用弓箭只射关羽盔缨，太守韩玄因此怀疑黄忠有二心，将斩黄忠，遭魏延劫场，韩玄被杀，黄忠与魏延一同投降刘备。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-436.html",
    "skills": [
      [
        "势敌",
        "转换技，锁定技，准备阶段，转换为阳，结束阶段，转换为阴。阳：你计算与其他角色的距离-1，你使用的黑色【杀】不可被响应。阴：其他角色计算与你的距离+1，你不可响应其他角色对你使用的红色【杀】。"
      ],
      [
        "义释",
        "当你对其他角色造成伤害时，你可以令此伤害-1，并获得其装备区中的一张牌。"
      ],
      [
        "骑射",
        "你可以将一张装备牌当做【酒】使用。你的手牌上限+X（X为你装备区牌数量）。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E7%BE%A4%E9%BB%84%E5%BF%A0",
    "images": [
      "assets/heroes/436-星黄忠-skin-01-4048a3e6ec.jpg"
    ]
  },
  {
    "id": 431,
    "name": "阎圃",
    "faction": "群",
    "factionClass": "qun",
    "hp": "3",
    "image": "assets/heroes/431-阎圃-skin-01-510f762af0.jpg",
    "thumb": "assets/heroes/431-阎圃-skin-01-510f762af0.jpg",
    "intro": "东汉末年人物，本为张鲁部下谋士，后随张鲁一同投降曹操，封平乐乡侯。",
    "source": "https://www.sanguosha.cn/hero-detail-431.html",
    "skills": [
      [
        "缓图",
        "每轮限一次，你攻击范围内一名其他角色摸牌阶段前，你可以交给其一张牌，令其跳过摸牌阶段，若如此做，其结束阶段你须选择一项：1.令其回复1点体力并摸两张牌；2.你摸三张牌并交给其两张手牌。"
      ],
      [
        "避祸",
        "限定技，一名角色脱离濒死状态时，你可以对其发动，令其摸三张牌，然后其他角色本轮计算与其的距离时+X（X为场上角色数）。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E9%98%8E%E5%9C%83",
    "images": [
      "assets/heroes/431-阎圃-skin-01-510f762af0.jpg"
    ]
  },
  {
    "id": 451,
    "name": "朱儁",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/451-朱儁-skin-01-2a41b78e08.jpg",
    "thumb": "assets/heroes/451-朱儁-skin-01-2a41b78e08.jpg",
    "intro": "朱儁（？—195年），字公伟，东汉末年名将。朱儁出身寒门，赡养母亲，以好义轻财闻名，受乡里敬重。黄巾起义爆发，朱儁以右中郎将、持节平定三郡之地，以功进封西乡侯，迁镇贼中郎将。又率军讨平黄巾，威声满天下。",
    "source": "https://www.sanguosha.cn/index.php/pc/hero-detail-451.html",
    "skills": [
      [
        "佯解",
        "出牌阶段限一次，你可以摸一张牌然后与一名角色拼点，若你没赢，你可以令另一名角色视为对与你拼点的角色使用一张无距离限制的火【杀】。"
      ],
      [
        "拒降",
        "限定技，其他角色脱离濒死时，你对其造成伤害。"
      ],
      [
        "厚俸",
        "令其他角色执行整肃，若未失败，自己也获得整肃奖励。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E6%9C%B1%E5%84%81",
    "images": [
      "assets/heroes/451-朱儁-skin-01-2a41b78e08.jpg",
      "assets/heroes/451-朱儁-skin-02-2484c82609.jpg"
    ]
  },
  {
    "id": 345,
    "name": "郝昭",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "4",
    "image": "assets/heroes/345-郝昭-skin-01-b9962f0a33.jpg",
    "thumb": "assets/heroes/345-郝昭-skin-01-b9962f0a33.jpg",
    "intro": "郝昭，字伯道，太原人，中国东汉末年至曹魏初年著名将领。郝昭少年从军，屡立战功，逐渐晋升为杂号将军，后受曹真的推荐镇守陈仓，防御蜀汉。太和二年（228年），诸葛亮率军北伐，为郝昭所阻，劝降不成，昼夜相攻二十余日后被迫退军。魏明帝因此封其为关内侯。不久因染疾而病死。",
    "source": "https://www.sanguosha.cn/hero-detail-345.html",
    "skills": [
      [
        "镇骨",
        "结束阶段，你可以选择一名其他角色，你的回合结束后和该角色的下个回合结束后，其将手牌摸至或弃至与你手牌数相同（最多摸至五张）。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E9%83%9D%E6%98%AD",
    "images": [
      "assets/heroes/345-郝昭-skin-01-b9962f0a33.jpg",
      "assets/heroes/345-郝昭-skin-02-1fae80e9be.jpg",
      "assets/heroes/345-郝昭-skin-03-7eb48a0456.jpg"
    ]
  },
  {
    "id": 261,
    "name": "徐荣",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/261-徐荣-skin-01-305632a507.jpg",
    "thumb": "assets/heroes/261-徐荣-skin-01-305632a507.jpg",
    "intro": "徐荣，玄菟人，东汉末年将领。本为中郎将，曾向董卓推举同郡出身的公孙度出任辽东太守。于汴水之战中击败曹操的独立追击军，以及在梁东之战中击败孙坚的部队。在董卓死后，受司徒王允的命令与李傕、郭汜交战，因部将胡轸投降，寡不敌众，于新丰之战被击败，战死在乱军之中。",
    "source": "https://www.sanguosha.cn/pc/hero-detail-261.html",
    "skills": [
      [
        "凶镬",
        "游戏开始时，你获得3个“暴戾”标记。出牌阶段，你可以交给一名其他角色一个“暴戾”标记，你对有此标记的角色造成的伤害+1，且其出牌阶段开始时，移去“暴戾”并随机执行一项：受到1点火焰伤害且本回合不能对你使用【杀】；流失1点体力且本回合手牌上限-1；你随机获得其一张手牌和一张装备区里的牌。"
      ],
      [
        "杀绝",
        "锁定技，其他角色进入濒死状态时，若其需要超过一张【桃】或【酒】救回，则你获得一个“暴戾”标记，并获得使其进入濒死状态的牌。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E5%BE%90%E8%8D%A3",
    "images": [
      "assets/heroes/261-徐荣-skin-01-305632a507.jpg",
      "assets/heroes/261-徐荣-skin-02-94bcb8f60f.jpg"
    ]
  },
  {
    "id": 449,
    "name": "皇甫嵩",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "image": "assets/heroes/449-皇甫嵩-skin-01-0f0e282708.jpg",
    "thumb": "assets/heroes/449-皇甫嵩-skin-01-0f0e282708.jpg",
    "intro": "皇甫嵩出身于将门世家，最初被举为孝廉、茂才。汉灵帝时被征为侍郎，迁北地太守。黄巾起义爆发后，与宦官吕强上疏请求解除党锢，被授为左中郎将，率兵讨平黄巾之乱，威震天下。战后升任左车骑将军，领冀州牧，封槐里侯。到任后，他奏请减免冀州百姓一年的租税。",
    "source": "https://www.sanguosha.cn/hero-detail-449.html",
    "skills": [
      [
        "讨乱",
        "可以打断终止结果为黑桃的判定，并对判定者出杀或你获得判定牌。"
      ],
      [
        "势击",
        "造成属性伤害时，若自己手牌不为全场最多，可以查看并弃置目标手牌中所有的红色牌，然后令自己摸牌。"
      ],
      [
        "整军",
        "执行整肃，并令队友也获得奖励。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E7%9A%87%E7%94%AB%E5%B5%A9",
    "images": [
      "assets/heroes/449-皇甫嵩-skin-01-0f0e282708.jpg"
    ]
  },
  {
    "id": 421,
    "name": "袁涣",
    "faction": "魏",
    "factionClass": "wei",
    "hp": "3",
    "image": "assets/heroes/421-袁涣-skin-01-8419d2c6de.jpg",
    "thumb": "assets/heroes/421-袁涣-skin-01-8419d2c6de.jpg",
    "intro": "袁涣，字曜卿，陈郡扶乐（今河南省周口市太康县）人。东汉末年官员，出身陈郡袁氏，为东汉司徒袁滂之子。袁涣早年曾任郡功曹，后被公府征辟，相继被举为高第、秀才。汉末战乱时，袁涣流寓江淮一带，初为袁术所用，后投吕布。建安三年（198年），曹操率兵剿灭了吕布，袁涣又转投曹操，拜沛南部都尉，后又任谏议大夫、郎中令等职，在任上尽心尽责，以敢谏直言称名。",
    "source": "https://www.sanguosha.cn/pc/hero-detail-421.html",
    "skills": [
      [
        "请决",
        "每轮限一次，其他角色使用牌指定一名体力值小于其且不处于濒死状态的除你以外的角色为唯一目标时，你可以摸一张牌，然后与其进行一次拼点，若你赢，则取消之。若你没赢，你代替成为此牌的目标。"
      ],
      [
        "奉节",
        "锁定技，准备阶段，你选择一名其他角色，直到你的下个回合开始前，每名角色的结束阶段，若其存活，你摸牌（至多摸至4张）或弃牌至手牌数与其体力值相同。"
      ]
    ],
    "hpSource": "https://sanguosha.fandom.com/zh/wiki/%E8%A2%81%E6%B6%A3",
    "images": [
      "assets/heroes/421-袁涣-skin-01-8419d2c6de.jpg",
      "assets/heroes/421-袁涣-skin-02-c043fe0879.jpg"
    ]
  },
  {
    "id": 259,
    "name": "李傕",
    "faction": "群",
    "factionClass": "qun",
    "hp": "4",
    "hpMax": "6",
    "image": "assets/heroes/259-李傕-skin-01-bf3daabc2e.jpg",
    "thumb": "assets/heroes/259-李傕-skin-01-bf3daabc2e.jpg",
    "intro": "李傕[jué]，字稚然。北地郡泥阳县（今陕西省耀县）人，汉末群雄之一。东汉末年汉献帝时的军阀、权臣，官至大司马、车骑将军、开府、领司隶校尉、假节。",
    "source": "https://www.sanguosha.cn/pc/hero-detail-259.html",
    "skills": [
      [
        "狼袭",
        "准备阶段，你可以对一名体力不大于你的其他角色造成0-2点随机伤害。"
      ],
      [
        "亦算",
        "出牌阶段限一次，当你使用的锦囊牌进入弃牌堆时，你可以减1点体力上限，从弃牌堆获得之。"
      ]
    ],
    "hpSource": "https://wiki.biligame.com/msgs/%E6%9D%8E%E5%82%95",
    "images": [
      "assets/heroes/259-李傕-skin-01-bf3daabc2e.jpg",
      "assets/heroes/259-李傕-skin-02-a6523c2fec.jpg"
    ]
  }
];
