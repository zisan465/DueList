
// Your data string
const dataString = `

C00001	মোঃ তাজুল ইসলাম	খালি	জয়না বাড়ি	+8801931867141	559985.00
C00003	মোঃ মারুফ	খালি	purbo Hati	+8801817561325	270245.00
C00004	মোঃ হোসেন আহমেদ (যমুনা ইলেকট্রিক)	খালি	হেমায়েতপুর	1	13525.00
C00005	মোঃ জাকির	খালি	বলিয়ারপুর	01815286243	2045.00
C00006	মোঃ করিম	খালি	চলন্তিকা হাউজিং	+8801841272868	247110.00
C00007	জামাল	খালি	জয়না বাড়ি (বড় বাড়ি)	+8801955665825	315312.83
C00008	দেলোয়ার মো	খালি	রোড নম্বর 16, আলমনগর	+8801715933229	126540.00
C00009	ইঞ্জি. আব্দুল লতিফ	খালি	রোড নম্বর 16, আলমনগর	+8801712157709	90095.00
C00010	মোঃ রেজাউল করিম ভূঁইয়া	খালি	রোড নম্বর 16, আলমনগর	01700002	74735.00
C00011	মোঃ রাসেল	খালি	আমিন বাজার	01700003	12855.00
C00012	মক্কা স্যানিটারি	খালি	N/A	01700004	37061.00
C00013	মোঃ সালাউদ্দিন	খালি	purbo Hati	01700005	44685.00
C00014	মোঃ আকবর	খালি	হেমায়েতপুর	01700006	3390.00
C00015	মোঃ আল ইসলাম	খালি	purbo Hati	+8801910032232	50491.00
C00016	মোঃ বাবু	খালি	ব্যাগ বারি	+8801770291377	42853.00
C00017	মোঃ মনির	খালি	বড়ো মসজিদ, হেমায়েতপুর	0170000	1220.00
C00018	মোঃ মাহাবুব	খালি	কুন্ডা	+8801712107857	11067.00
C00019	মোঃ আব্দুল হক	খালি	জয়না বাড়ি	+880194275171	68931.00
C00020	মোঃ মাহামুদ হোসেন	খালি	হেমায়েতপুর	+8801822300306	1945.00
C00021	দিপু	খালি	দাসপাড়া	+8801814453821	55330.00
C00022	মোঃ বদল মোল্লা	খালি	সোবাপুর	+8801729002872	35389.00
C00023	মোঃ ইসমাইল	খালি	purbo Hati	+8801773596350	9737.00
C00024	মোঃ নুরুল ইসলাম	খালি	হরিন্দোরা	+8801721175015	19435.00
C00025	মোঃ ডাবলু সরকার	খালি	চলন্তিকা হাউজিং	+8801957221967	৪৪৯৭৩৪.০০
C00026	মোঃ আলম	খালি	ব্যাগ বারি	+8801748918462	120488.00
C00027	হাজী আক্কাস আলী	খালি	হেমায়েতপুর	+৮৮০১৬২৪৫৩৯১৩২	442851.00
C00028	অধ্যাপক আবু সাঈদ	খালি	হরিন্দোরা	+8801797447560	63626.00
C00029	নাজমুল ইসলাম	খালি	বেরাইদ	01681809882	10151.00
C00030	মোঃ আসলাম	খালি	জনতা হাউজিং	+8801712844277	17173.00
C00031	বিপ্লব মিস্ত্রী	খালি	মধুমতি মডেল টাউন	+8801867835150	19577.00
C00032	মোঃ নজরুল ইসলাম	খালি	জয়না বাড়ি	+8801818271042	85430.00
C00033	মোঃ রাজিব	খালি	জয়না বাড়ি	+8801622287762	20455.00
C00034	হাজী মোঃ আসাদ মিয়া	খালি	হেমায়েতপুর	+8801713512482	46200.00
C00035	মোঃ ফরিদ মিস্ত্রী	খালি	ব্যাগ বারি	01700008	10545.00
C00037	কমপোর্ট	খালি	চলন্তিকা হাউজিং	0100009	158830.00
C00038	ইঞ্জি. শফিকুল ইসলাম	খালি	কুন্ডা	+8801736323794	140272.00
C00039	আলেয়া অ্যাপারেলস লিমিটেড	খালি	হেমায়েতপুর	+880179998214	360071.00
C00041	মোঃ মঞ্জু	খালি	purbo Hati	017000010	142611.00
C00042	মোঃ শরিফুল	খালি	ভোরালী	+8801704161618	166860.00
C00043	মোঃ আব্দুল গফুর	খালি	পুকুরপাড়	+8801891763696	3215.00
C00044	মোঃ ইমান আলী	খালি	জাওচোর	+8801788848458	217898.00
C00045	মোঃ দেওয়ান নাজমুল	খালি	চলন্তিকা হাউজিং	+8801886175454	36205.00
C00046	মোঃ আবুল বাতেন	খালি	শহীদুল্লাহ হাউজিং	+8801876052975	12355.00
C00047	মোঃ আরিফ	খালি	purbo Hati	+8801703427261	31940.00
C00048	মোঃ শাহ আলম	খালি	হেমায়েতপুর	+8801729859572	6895.00
C00049	মোঃ আসলাম	খালি	ব্যাগ বারি	+8801712672266	42310.00
C00050	ক্রেস্নো দাস	খালি	রিসিপাড়া	+8801810759645	1150.00
C00051	মোঃ সালাউদ্দিন	খালি	purbo Hati	+8801832771866	16185.00
C00052	মোঃ রাকিব মিস্ত্রী	খালি	purbo Hati	01824504056	19305.00
C00053	সালেয়া ইলেকট্রিক	খালি	আমিন বাজার	01820549520	3182.00
C00054	মোঃ আব্দুল রশিদ	খালি	বোরালী	017000013	18585.00
C00055	আশা টাওয়ার	খালি	হেমায়েতপুর	+8801989751079	9910.00
C00056	মোঃ খলিলুর রহমান	খালি	আলমনগর	+8801712108892	27860.00
C00057	রাজ প্ল্যাট	খালি	N/A	017000014	250000.00
C00058	মোঃ আব্দুল বারেক	খালি	জয়না বাড়ি	+8801912226675	35425.00
C00059	ফাতেমা মনজিল	খালি	N/A	017000015	450.00
C00060	হাবিব গুয়াল	হাবিব গুয়াল	বলিয়ারপুর	01648419566	139535.00
C00061	মোঃ আলী আহমেদ	খালি	হরিন্দোরা	+৮৮০১৭৪৩৯৫১৪৯৫	7000.00
C00062	মোঃ আসাদুজ্জামান	খালি	মধুমতি মডেল টাউন	+8801917520973	105435.00
C00063	মোঃ মেহের আলী	খালি	জয়না বারী	017000017	11262.00
C00064	মোঃ ইব্রাহিম হোসেন (রানা)	খালি	শামপুর	+8801760961106	39065.00
C00065	মোঃ জনি মিস্ত্রী	খালি	N/A	017000018	2372.00
C00067	রেবেকা সুলতানা	খালি	মধুমতি মডেল টাউন	+8801712632575	4824.00
C00068	মোঃ আব্দুল সালেহ	খালি	N/A	+8801722248944	6505.00
C00069	মনজিল	খালি	চলন্তিকা হাউজিং	+88017123221955	35222.00
C00070	মোঃ পলাশ	খালি	বোরালী	01684152009	7575.00
C00071	মোঃ জাহাঙ্গীর	খালি	purbo Hati	017000020	6990.00
C00072	তিলোক স্যানিটারি মো	খালি	ফুল বাড়িয়া	017000021	17705.00
C00073	মোঃ সায়েব আলী	সোয়েব	হেমায়েতপুর	01674532576	290118.00
C00074	ফাতেমা মনজিল	খালি	purbo Hati	017000023	418565.00
C00075	মোঃ ফয়সাল	খালি	চলন্তিকা হাউজিং	+8801712663140	14700.00
C00076	মোঃ সেলিম	খালি	হেমায়েতপুর	+8801713087987	50361.00
C00077	মোঃ হেদায়েত উল্লাহ	খালি	হেমায়েতপুর	+8801711469544	15025.00
C00078	মোঃ গনি	খালি	শামপুর	+8801920336104	49130.00
C00079	মোঃ লাবলু	খালি	চলন্তিকা হাউজিং	+8801712539389	3850.00
C00080	মোঃ আসদুস সাত্তার	খালি	ব্যাগ বারি	+8801782906292	10000.00
C00081	ওহিদ মো	খালি	N/A	017000024	72339.00
C00082	মোঃ জোসিম	খালি	ব্যাগ বারি	+8801706568870	17415.00
C00083	হাজী মুকবুল	খালি	জামিরতা	01700025	1150.00
C00084	মোঃ পারভেজ	খালি	শহীদুল্লাহ হাউজিং	+8801717013701	57345.00
C00085	মোঃ বাচ্চু মিয়া	খালি	রোড # 11/2, আলমনগর	01700026	18455.00
C00086	মোঃ নাসির	খালি	N/A	+8801892569735	24990.00
C00087	মোঃ জামাল সাহেব	খালি	হেমায়েতপুর	01922909116	61959.00
C00088	মোঃ রিয়াজ মিস্ত্রী	খালি	N/A	017000028	6330.00
C00089	আরব ট্যানারি	খালি	হরিন্দোরা	01711288529	8200.00
C00090	মোঃ আতাউর রহমান	খালি	বলিয়ারপুর	+8801884430446	30403.00
C00091	মোঃ আর্নাল	খালি	বলিয়ারপুর	+৮৮০১৬৭৫৮১৭৪৯৩	9780.00
C00092	আলিম মিস্ত্রী	খালি	চলন্তিকা হাউজিং	017000030	4535.00
C00093	মোঃ ইসমাইল	খালি	বগুত্র	01712878671	19247.00
C00094	কাজল মিস্ত্রি	খালি	N/A	+880173535416	34785.00
C00095	মোঃ জোমির উদ্দিন	খালি	ঈদগা মঠ	+8801712938241	2816.00
C00096	সাহাবুদ্দিন ড	খালি	রিসিপাড়া	+8801733492931	5145.00
C00097	মোঃ মিজানুর রহমান	খালি	হেমায়েতপুর	01700032	6300.00
C00098	মোঃ আসাদ	খালি	হরিন্দোরা	+8801715578964	123470.00
C00099	মোঃ সাইফুল	খালি	ভোরালী	01700033	24575.00
C00100	মোঃ মোবারক	খালি	ফুল বাড়িয়া	+8801615925123	20558.00
C00101	মোঃ আব্দুল আজিজ	খালি	শাপলা হাউজিং	+8801927383193	65160.00
C00102	আব্দুল কুদ্দুস	খালি	সুইস্টেক্স	+8801726111203	24960.00
C00103	মোঃ জাহাঙ্গীর	খালি	হরিন্দোরা	01726949000	254784.00
C00104	সিরাজুল ইসলাম	খালি	নোটুন পাড়া	+8801775483113	1600.00
C00105	মোকলেস ভাই	খালি	সোবাপুর	+8801775386095	114185.00
C00106	গোলাম মোস্তফা ডা	খালি	N/A	017000035	12335.00
C00107	নুরু আলম মিস্ত্রী	খালি	ভোরালী	+8801611909275	20405.00
C00108	খোরশেদ আলম	খালি	মধুমতি মডেল টাউন	+8801716416289	4435.00
C00109	নুরুল ইসলাম	খালি	জয়নাবাড়ি	+8801712580032	140625.00
C00110	মোঃ মেহের আলী	খালি	জয়নাবাড়ি	01553372754	30946.00
C00111	মোঃ সুমন মিস্ত্রী	খালি	হারুলিয়া	0170000369	16165.00
C00112	সপন বাবু	খালি	রিসিপাড়া	+8801703994042	15260.00
C00113	মোঃ সাইফুল	খালি	ভোরালী	+880181804249	4920.00
C00114	মোহাম্মদ আলী	খালি	Sudkhira - Dokan স্টাফ	+8801822896332	11610.00
C00115	খোরশেদ	খালি	হেমায়েতপুর	+8801922041775	58725.00
C00117	মুসলিম উদ্দিন	খালি	শাপলা হাউজিং	+8801954233955	3260.00
C00118	মোঃ মিনহাজ	খালি	উত্তর মেটকা	+8801722453477	7715.00
C00119	কবি মিস্ত্রি	খালি	আমিন বাজার	+8801710931523	9685.00
C00120	মহি উদ্দিন	খালি	হেমায়েতপুর	017000038	49470.00
C00122	হাজী মুহাম্মদ আলমগীর হোসেন	খালি	হেমায়েতপুর	+8801711440770	119186.90
C00123	আবদুস সবর খান	খালি	হেমায়েতপুর	0170000039	121696.00
C00124	মোঃ নওয়াজ শরীফ	খালি	মোদ্দো শ্যামপুর	+8801884499317	6790.00
C00125	মোঃ আউয়াল	খালি	যদুরচোর	+8801711277328	8125.00
C00126	মোসারফ ভাই	খালি	জয়নাবাড়ি	+880182148376	5335.00
C00127	মোঃ লিটন	খালি	হরিন্দোরা	+৮৮০১৬৩১৫৮৫৩৬৮	43225.00
C00128	আতাউর রহমান	খালি	ভোরালী নটরুনপাড়া	+8801812188662	24255.00
C00129	মাস্টার মিস্ত্রি	খালি	হেমায়েতপুর	+88017834444296	17025.00
C00130	নাজির হোসেন	খালি	জয়নাবাড়ি বড়বাড়ি	+8801922172661	46379.00
C00131	মোঃ হাসান	খালি	শ্যামপুর	+8801819006662	57315.00
C00132	আনোয়ার হোসেন	খালি	ব্যাগ বারি	+8801818520617	33540.00
C00133	আব্দুল বাতেন	খালি	সুইস্টেক্স	+8801943036639	4910.00
C00134	মোঃ সেলিম	খালি	বন গ্রাম	+8801815051368	4680.00
C00135	ওয়াজ উদ্দিন উল্লাহ	খালি	নোটুন পাড়া	+8801720082502	7915.00
C00136	সেলিম ভাই	খালি	চলন্তিকা হাউজিং	+8801823373717	3145.00
C00137	মোঃ মারুফ	খালি	জয়নাবাড়ি	0170000056	8485.00
C00138	মামুন সাহেব	খালি	চলন্তিকা হাউজিং	+8801716723964	62719.00
C00139	আলী মিস্ত্রী	খালি	চলন্তিকা হাউজিং	+8801955450526	1650.00
C00140	মোঃ রিপন	খালি	চলন্তিকা হাউজিং	+8801940202180	14770.00
C00141	মোঃ মোশারফ হোসেন	খালি	জয়নাবাড়ি	+8801821483769	28240.00
C00142	হাজী মোঃ বাদশা মিয়া	খালি	তেতুল ঝোড়া	+8801712213280	118923.00
C00143	আল আমিন	খালি	বগুত্র	+8801883078123	100873.00
C00144	মুন্নাফ	খালি	হরিন্দোরা	+8801762181974	76515.00
C00145	লিয়াকত হোসেন	খালি	নোটুন পাড়া	+8801811157582	7995.00
C00146	মোঃ রিকু	খালি	হেমায়েতপুর	+8801733505541	64645.00
C00147	মোঃ আনোয়ার হোসেন	খালি	ঝাউ চর	+8801618611523	14660.00
C00148	হাজী নজরুল ইসলাম	খালি	বলিয়ারপুর	017000057	20150.00
C00149	মোঃ হুমায়ুন	খালি	শ্যামপুর	+8801739690714	54930.00
C00150	মোঃ লুফর রহমান	খালি	শ্যামপুর	+8801860886990	9571.00
C00152	মোবারক হোসেন	খালি	শ্যামপুর	+8801820524370	115885.00
C00153	সোহেল	খালি	হারুলিয়া	+8801766560425	6700.00
C00154	মোঃ মোস্তফা	খালি	uttar ঝাউচোর	+8801831276543	19030.00
C00155	মোঃ অনিক	খালি	জয়নাবাড়ি	017000058	20370.00
C00156	মোঃ আমির হোসেন	খালি	হরিন্দোরা	+8801889131100	27015.00
C00157	মোঃ আলম	খালি	হেমায়েতপুর	+8801944852271	3765.00
C00158	মোঃ আব্দুল ওহাব	খালি	আলমনগর সড়ক নং ১১	+8801710966000	130826.00
C00159	মোঃ আব্দুল মমিন	খালি	N/A	0170000040	13934.00
C00160	মামলত হোসেন	খালি	হেমায়েতপুর	+8801623287333	2130.00
C00161	মোঃ জাকির হোসেন	খালি	N/A	0170000041	26885.00
C00162	মনির মিস্ত্রী	খালি	আলমনগর	+8801321192919	16475.00
C00163	মোঃ সায়েম	খালি	হরিন্দোরা	+8801720243269	64140.00
C00164	মোঃ রফিকুল	রফিকুল	তেতুল ঝোড়া	+8801980825611	23380.00
C00165	মোঃ ইকবাল হোসেন	খালি	চলন্তিকা হাউজিং	+8801712085339	17730.00
C00167	মোঃ জাকির হোসেন	খালি	আলমনগর	0170000042	19520.00
C00168	মোঃ ফরহাদ	খালি	হেমায়েতপুর	+8801680360072	37675.00
C00170	জলিল মিস্ত্রী	খালি	তেতুল ঝোড়া	01700000044	1640.00
C00171	আব্দুল আজিজুল ইসলাম	খালি	হোজরৎপুর	+8801817693232	7000.00
C00172	মোঃ রুবেল	খালি	purbo Hati	+8801822897109	30955.00
C00173	মোঃ জাহিদ	খালি	হেমায়েতপুর	017000000036	3375.00
C00174	শামীম মিস্ত্রী	খালি	বলিয়ারপুর	+8801676025232	9365.00
C00175	Abs Tanel	খালি	হরিন্দোরা	+8801830996630	9970.00
C00176	মোঃ মাসুম	খালি	ঝাউ চর	+৮৮০১৭৫৫৫৭৭৫৯৩	12087.00
C00177	মোঃ আবুল কালাম	খালি	জয়নাবাড়ি	+8801721601437	36648.00
C00178	মোঃ সাইফুল ইসলাম	খালি	ভার্টেক্স	+8801740901959	20400.00
C00179	মোঃ পারভেজ	খালি	ব্যাগ বারি	+8801876478669	29200.00
C00180	রুহুল আমিন	খালি	নোটুন পাড়া	+8801843369252	130070.00
C00181	মোঃ ফারুক মিস্ত্রী	খালি	শ্যামপুর	+8801794521599	45097.00
C00182	শুরমা ট্রেডার্স	খালি	vorali	+8801716676633	10240.00
C00183	মোঃ আব্দুল হক	খালি	নিমটেক	+8801772222001	42146.00
C00184	মোঃ মিজান	খালি	বলিয়ারপুর	+8801911935996	52065.00
C00185	আকাশ মজুমদার	খালি	পুকুরপাড়	+8801716864477	23819.00
C00186	রোটন বাবু	খালি	হারুলিয়া	+8801726490249	10311.00
C00187	মোঃ হাসমত	খালি	চলন্তিকা হাউজিং	+8801796511547	9640.00
C00188	শিল্পী এন্টারপ্রাইজ- সামাদ	খালি	জয়নাবাড়ি	01700000027	18170.00
C00189	আব্দুল রোহিম	খালি	চলন্তিকা হাউজিং	01700000026	7880.00
C00190	মোঃ আমদাদ হোসেন	খালি	হেমায়েতপুর	017000000025	100760.00
C00191	সাইফুল ইসলাম	খালি	মিটকা	+8801823350859	7048.00
C00192	মোঃ ফিরোজ মিয়া	খালি	জয়নাবাড়ি	+8801819666084	9460.00
C00193	মোঃ কালাম	খালি	ঝাউ চর	+8801830494888	13729.00
C00194	মোঃ ডালিম	খালি	বলিয়ারপুর	+8801742705031	6980.00
C00195	মোঃ আবু সাঈদ	খালি	আলম নগর, রোড নম্বর ১১	+8801782168991	21137.00
C00196	মোঃ সাইফুল ইসলাম	খালি	হেমায়েতপুর	017000000169	45242.00
C00197	আব্দুল রব	খালি	নোটুন পাড়া	+8801740559317	4924.00
C00198	দ্বীন ইসলাম	খালি	প্যান পাড়া	+8801870006381	17858.00
C00199	মোঃ সুলতান	খালি	মুসলিম পাড়া	01700000096	29851.00
C00200	সার্জেন্ট জাহিদ	খালি	বনানী	+8801716017083	9300.00
C00201	রুহুল আমিন	খালি	ভোরালী নটরুনপাড়া	+৮৮০১৯১৪৮৫৪৫৮৬	13785.00
C00202	গোপাল সরকার	খালি	শ্যামপুর	+8801716709040	17335.00
C00203	আবু তাহের	খালি	চাঁপাইন সাভার	+৮৮০১৬৭৬৭৯৮৬০৮	16775.00
C00204	ফরিদ মিস্ত্রী	খালি	হরিন্দোরা	+8801830543230	64540.00
C00205	মোবারক সাহেব	খালি	সুইস্টেক্স	+8801771438027	14575.00
C00206	সোটোটা এন্টারপ্রাইজ	মোঃ রুহুল আমিন	শাওরাইল বাজার, সিংগাইর	01729826603	0.10
C00207	আব্দুল বাতেন	খালি	purbo Hati	+8801876347052	14560.00
C00208	আব্দুল রশিদ মিস্ত্রী	খালি	ভোরালী	01704000000	58336.00
C00209	মোঃ মিলন	খালি	চলন্তিকা হাউজিং	+8801615227788	21370.00
C00210	রাজিয়া সুলতানা	খালি	জয়নাবাড়ি	+8801715877244	8760.00
C00211	মোঃ নাঈম	খালি	প্যান পাড়া	+৮৮০১৬৭৫৫৫৮৭৮১	7335.00
C00212	আনিসুর রহমান	খালি	ভোরালী	খালি	4580.00
C00213	মোঃ আসলাম	খালি	ভোরালী	01787413867	94385.00
C00214	মোঃ সামসুদ্দিন	খালি	হেমায়েতপুর	+8801818538445	25235.00
C00215	মোঃ ফয়সাল	খালি	চলন্তিকা হাউজিং	+8801642100935	172275.00
C00216	মোঃ সাহাজান শেখ	খালি	চলন্তিকা হাউজিং	+8801713290929	17543.00
C00217	ইয়াসিন সাহেব	খালি	আমিন বাজার	+8801711032384	16355.00
C00218	সাহালোম	খালি	purbo Hati	+8801918236956	11535.00
C00219	মোঃ বাচ্চু মিয়া	খালি	vorali	+8801822833914	10615.00
C00220	মোঃ সাহাদাত হোসেন	খালি	যদুরচোর	+8801821662664	4000.00
C00221	মিন্টু মিস্ত্রি	খালি	সাভার	+8801779980431	29865.00
C00222	মোঃ সহিদ	খালি	ঝাউ চর	+8801711937795	103715.00
C00223	মোজাম্মেল হক	খালি	vorali	+880711102292	86144.00
C00224	জমসের মিস্ত্রী	খালি	জয়নাবাড়ি	+8801920492813	12316.00
C00225	আকবর হোসেন	খালি	হেমায়েতপুর - 292 পৃষ্ঠা	01676719111	137895.96
C00227	আবু ভাই - তৌসিফ ভের	খালি	হেমায়েতপুর	0170000011	71705.00
C00228	মোঃ সাহিন	খালি	জয়নাবাড়ি	+৮৮০১৯৬৬৬৯৬৩৮৬	20800.00
C00229	হাজী আবু বাশার	খালি	শ্যামপুর	+8801725146110	11210.00
C00231	মোঃ বাবু ভাই	খালি	মিমারটেক	+8801978030699	16985.00
C00232	আবুল কালাম	খালি	চলন্তিকা হাউজিং	+8801711050775	16562.00
C00233	রোকসানা বাগম	খালি	হেমায়েতপুর	+8801720224764	5000.00
C00234	আব্দুল আজিজ	খালি	হেমায়েতপুর	+8801715960104	14275.00
C00235	সোহিদুল ইসলাম	খালি	singair	+8801811961445	11955.00
C00236	হাফিজ ভাই	খালি	চলন্তিকা হাউজিং	+8801711008023	265174.00
C00238	মোঃ আশরাফ মাস্টার	খালি	জয়নাবাড়ি	+8801722052016	42529.00
C00239	মোঃ জাহিদ	খালি	হেমায়েতপুর	+8801671652535	557299.35
C00240	মোঃ আরিফ	খালি	চান্দুলিয়া	+৮৮০১৬১৪৪৬৮৬২২	7225.00
C00241	মোঃ রাকিব	খালি	জয়নাবাড়ি	+8801726401331	19075.00
C00242	মোঃ রফিক	খালি	ভোরালী	+8801711878613	18630.00
C00243	মোঃ পলাশ	খালি	আলমনগর	+8801628577176	24420.00
C00244	মোঃ আতিকুর রহমান	খালি	ঝাউ চর	+8801793966606	12000.00
C00245	আবুল হোসেন	খালি	ভোরালী	+8801831383160	74265.00
C00246	আলমাস	খালি	ভোরালী	+8801726137468	39044.00
C00247	সিরাজ ভাই	খালি	কোটাপাড়া	+8801724249148	41045.00
C00249	মোঃ হাসান	খালি	vorali	+8801831336412	14817.00
C00250	হেলাল ভাই	খালি	চলন্তিকা হাউজিং	+8801712861737	10000.00
C00251	রাজ জায়গা	খালি	হেমায়েতপুর	+8801751315526	219327.00
C00252	আব্বাস খান	খালি	vorali	+8801740647526	59730.00
C00253	মোঃ সোহেল	খালি	কাতলা পুর	+8801681720500	146216.00
C00254	আব্দুল রহমান	খালি	vorali	+8801726070803	21070.00
C00255	আব্দুল আজিজ	খালি	বলিয়ারপুর	+8801734603399	3928.00
C00256	আব্দুল কুদ্দুস	খালি	হেমায়েতপুর	+8801711054665	9755.00
C00257	মোঃ মুজিবর	খালি	প্যান পাড়া	+8801811266737	8675.00
C00258	মোঃ রাজিব	খালি	হারুলিয়া	+880191187631	5700.00
C00259	আব্দুল কুদ্দুস	খালি	purbo Hati	+8801911876312	131308.00
C00260	মোঃ চঞ্চল	খালি	হেমায়েতপুর	+8801756811119	23405.00
C00261	মোঃ লতিফ	খালি	বলিয়ারপুর	+8801935795138	9325.00
C00262	সাত্তার খান	খালি	vorali	+8801878676465	9539.00
C00263	রাজক মিস্ত্রী	খালি	সাভার	+8801673713432	6772.00
C00264	মোঃ ফরিদ	খালি	জয়নাবাড়ি	+8801680686433	16000.00
C00265	মোঃ আব্দুল সাত্তার	খালি	purbo Hati	+8801902424173	42690.00
C00266	মোঃ মামুন	খালি	প্যান পাড়া	+8801671628974	7000.00
C00267	মোহাম্মদ আলী	খালি	মিটকা	+8801864646164	14400.00
C00268	মোঃ হীরা	খালি	উলাইল	01700000010	7960.00
C00269	রাশেদ ইসলাম	খালি	জয়নাবাড়ি	+8801833778686	4000.00
C00270	মোঃ সেলিনা আক্তার	খালি	আলমনগর সড়ক নং 2	0170000009	15700.00
C00271	মোঃ নজরুল ইসলাম	খালি	জয়নাবাড়ি	+8801730274373	6400.00
C00272	মোঃ আব্দুল মান্নান	খালি	যদুরচোর	01700000008	23660.00
C00273	মোঃ মুজুর	খালি	ঝাউ চর	+880181133658	8530.00
C00274	মোঃ ওহেদ	খালি	ভারাঙ্গা ব্রিজ	+8801773346632	12600.00
C00275	মোঃ সহিদ	খালি	সুইস্টেক্স	+8801812174531	8830.00
C00276	লিটন সুইং	খালি	হেমায়েতপুর	017000007	46081.00
C00277	রেজাউল ইসলাম	খালি	হেমায়েতপুর	0170000006	10445.00
C00278	আমিরুল ইসলাম	খালি	আলমনগর হাউজিং	+8801913184805	9155.00
C00279	লেহাজ উদ্দিন	খালি	মুগরাকান্দা	+8801611158765	292665.00
C00280	আবু জাকির	খালি	বলিয়ারপুর	+8801628322153	8921.00
C00281	জামান ভাই	খালি	ঝাউ চর	+8801674082634	23015.00
C00282	মোঃ সফিক	খালি	বোরো মসজিদ	+8801915209215	174345.00
C00284	আবু সাঈদ	খালি	বলিয়ারপুর	+8801821626722	28551.00
C00285	অলি আহমেদ	খালি	আলমনগর হাউজিং	+8801732332318	37435.00
C00286	হাজী আলী আহমেদ	খালি	জয়নাবাড়ি	+8801715659242	300000.00
C00287	হায়দার আলী	খালি	হেমায়েতপুর	+8801725947783	6658.00
C00288	মোঃ মান্নান	খালি	ভাগুর্তা	+8801820216926	7335.00
C00289	মনির ভাই- তোসিফ দরজা	মনির	হেমায়েতপুর	01828304451	714648.09
C00290	হাজী রতন	খালি	হেমায়েতপুর	+8801819152315	12865.00
C00291	মোঃ আজম	খালি	পূর্ব হাটি	+8801812171092	5000.00
C00292	মহসিন	খালি	কোন্ডা	+8801712281070	6175.00
C00293	মোঃ বসির	খালি	চলন্তিকা হাউজিং	+8801918517706	7935.00
C00294	মোঃ মালেক	খালি	শ্যাম পুর	+8801787436050	20000.00
C00295	সুকুর আলী	খালি	ভোরালী	+8801713543234	10360.00
C00296	মোঃ পিন্টু	খালি	ভরালি বালুর গণিত	+8801987961968	52720.00
C00297	Brazon দল এবং প্যাকেজিং	খালি	sudkhira	+8801836735108	27880.00
C00298	সাব্বির হোসেন	সাব্বির	হেমায়েতপুর	01846920536	707501.14
C00299	মোঃ ফরিদ	খালি	আলমনগর	+8801828733217	37840.00
C00300	এরশাদ	খালি	যদুরচোর	+8801831132491	4500.00
C00301	মোঃ রাকিব	খালি	যদুরচোর	+8801731101754	30710.00
C00302	ফজলুর রহমান	খালি	আমিন বাজার	+8801676520647	16780.00
C00303	মোঃ নুরুল আমিন	খালি	হেমায়েতপুর	+8801821308183	49634.00
C00304	হাজী সাইদুর রহমান	খালি	হেমায়েতপুর	+8801726019967	59380.00
C00305	সেলিম ভাই	খালি	হেমায়েতপুর	+8801712669795	24415.00
C00306	আব্দুল খালেক	খালি	হরিন্দোরা	+8801726021082	5495.00
C00307	রাশেদ মো	খালি	ঝাউ চর	+8801849662554	7000.00
C00308	ইসমাইল	খালি	সুইস্টেক্স	01923233601	13554.00
C00309	কেয়াম উদ্দিন	খালি	বাগবাড়ি	+৮৮০১৭৫৪০৯৪৫৯৮	125962.00
C00310	নুরুল ইসলাম	খালি	হরিন্দোরা	+8801713927493	68735.00
C00311	মোঃ মনির	খালি	কানারচোর	+8801843379040	10000.00
C00312	মোঃ আলাউদ্দিন	খালি	দক্ষিণ শ্যামপুর	+8801725278619	17315.00
C00313	মোঃ আলম	খালি	কুন্ডা	+8801840863169	17447.00
C00314	কাদের মিস্ত্রী	খালি	N/A	+8801735354165	8070.00
C00315	তারিফুল	খালি	জয়নাবাড়ি	+8801738311512	7985.00
C00316	মোঃ সিদ্দিক	খালি	হেমায়েতপুর	+8801819198990	৩৩৩৬৫.০০
C00317	সাইফুল ইসলাম	খালি	ভোরালী	+8801818042490	193670.00
C00318	মোঃ আরিফ	খালি	হরিন্দোরা	+8801824902076	15609.00
C00319	আমজাদ হোসেন	খালি	হাতেম আলী কমপ্লেক্স	0170000004	24495.00
C00320	মোঃ আল আমিন	খালি	মধুমতি মডেল টাউন	+8801995846334	15715.00
C00321	মোঃ সেলিম	খালি	শ্যামপুর	+8801712080875	50850.00
C00322	রানা মোল্লা	খালি	চলন্তিকা হাউজিং	+8801716541996	87485.00
C00323	ব্রাদার্স পার্ক	খালি	আলম নগর হাউজিং	+8801826386195	233074.00
C00324	মোঃ জাহাঙ্গীর	খালি	পূর্ব হাটি	+8801829157033	50232.00
C00325	মাসুদ রানা	খালি	শ্যামপুর	01999988721	6925.00
C00326	মোঃ পারভেজ	খালি	হেমায়েতপুর	01931667888	6705.00
C00327	কুম কুম দোকান	খালি	arent para	0178885026	17120.00
C00328	ওমর ফারুক	খালি	লাজপোলি	+8801673220367	13204.00
C00329	মোঃ আলী	খালি	রূপায়ন হাউজিং	017000002	21415.00
C00330	জামাল ভাই	খালি	হরিন্দোরা	01726361418	75975.00
C00331	ওমর ফারুক	খালি	জয়নাবাড়ি	+8801833096465	4325.00
C00332	মিন্টু ড্যাশ	খালি	singair	+8801719676885	10600.00
C00333	বাদল বেপারী	খালি	সোবাপুর	+8801623545917	17595.00
C00334	স্বপ্নের জায়গা ১- জাকির	খালি	আলম নগর রোড #11/12	+8801818366591	146495.00
C00335	ইসলাম	খালি	সোবাপুর	+8801672259630	5030.00
C00336	আবুল হোসেন	খালি	আমিন বাজার	+8801720420431	40775.00
C00337	মোঃ রোহিজ উদ্দিন	খালি	vorali	+8801810832558	15250.00
C00338	রানা ভাই	খালি	শাপলা হাউজিং	+8801911340230	7470.00
C00339	সামসু উদ্দিন	খালি	সুইস্টেক্স	01700000	4290.00
C00340	কালাম	খালি	uttar ঝাউচোর	+8801715347265	5725.00
C00341	আমিনুল ইসলাম	খালি	পূর্ব হাটি	+8801830275880	11020.00
C00342	আনোয়ার হোসেন ভুইয়া	খালি	এজেন্ট প্যারা	+8801787949100	10710.00
C00343	আশিক বাবু	খালি	শ্যামপুর	+8801718162905	45000.00
C00388	সাকেরা স্যানিটারি	লাকি ভাই	হেমায়েতপুর	01973723723	69425.00
C00389	দাদা	দাদা		01	395.00
C00390	মা স্যানিটারি		হেমায়েতপুর	01979213569	20280.00
C00395	ফাতেমা স্যানিটারি		বাগবাড়ি	01819435748	175318.00
C00396	হক স্যানিটারি	সান্টো	সিংগাইর বাজার	01976812681	-0.30
C00397	আদনান স্যানিটারি	আদনান	ঝাউচোর বাজার	01746069609	59040.00
C0100018	রাবি স্যানিটারি	রবি স্যানিটারি	হেমায়েতপুর	01680157923	3658.00
C0100112	নুরুল আমিন		হেমায়েতপুর	01821308183	103971.00
C0100179	হেদায়েত মোল্লা			01913348206	7320.00
C0100876	সামাদ স্যানিটারি	সামাদ স্যানিটারি		01825769083	4576.00
C0100902	হাতেম আলী (সুপার মার্কেট)	হাতেম আলী (সুপার মার্কেট)		01781525599	2617.00
C0100903	আব্দুল করিম	কোরিম	চলন্তিকা হাউজিং	01711272868	347735.00
C0100904	আল্লাহদান স্যানিটারি	আল্লাহদান স্যানিটারি	আলিয়াপুর	01884646500	116444.00
C0100909	আব্দুল আজিজ	আব্দুল আজিজ		01927383193	65160.00
C0100911	--------		সামপুর	01751781005	935.00
C0100916	বাবলু স্যানিটারি	বাবলু স্যানিটারি	টেনারি 3 নং। পাওয়া	01879298753	2550.00
C0100917	জোশী মুদ্দিন	জোশী মুদ্দিন	হারুলিয়া	01620754085	42579.00
C0100920	জহিরুল ইসলাম		বলিয়ারপুর	01676372862	27113.00
C0100924	জয়নাল আবেদীন		রূপায়ন হাউজিং	01312925197	17255.00
C0100933	সহজলাল ইলেকট্রনিক	সহজলাল ইলেকট্রনিক	আলিপুর	01887422079	73571.00
C0100937	দ্বীন ইসলাম	দ্বীন ইসলাম	ভোরালী, নোটুন পাড়া	01828176103	613150.79
C0100940	5057	আমির স্যানিটারি		01722175832	110355.00
C0100941	ফারুক হোসেন	ফারুক হোসেন	বলিপুর	01835534136	37865.00
C0100947	সাইমন		পানপাড়া, ফুলবাড়িয়া	01857704161	19603.00
C0100957	মার্সনস ট্যানারি লিমিটেড।		YE1 বিসিক ট্যানারি শিল্প এলাকা, হেমায়েতপুর, সাভার, ঢাকা	01717111893	4280.00
C0100964	এসএ স্যানিটারি	এসএ স্যানিটারি	হেমায়েতপুর	01711574821	78269.00
C0100977	চায়না ট্যানারি	চায়না ট্যানারি	হরিন্ধোরা	01849318189	23260.00
C0100979	ফ্রান্স হার্ডওয়্যার	ফ্রান্স হার্ডওয়্যার	মোল্লা মার্কেট, হেমায়েতপুর, সাভার, ঢাকা	01711902074	39118.00
C0100981	রফিকুল ইসলাম	রফিকুল ইসলাম	হরিন্ধোরা, হেমায়েতপুর, সাভার, ঢাকা	01728309702	19350.00
C0100991	রাসেল	রাসেল	জয়নাবাড়ি	01920326566	3823.00
C0100995	মোতালেব হোসেন	মোতালেব হোসেন	হরিন্ধোরা	01817056889	113306.17
C0100997	মোঃ রাজু রহমান	মোঃ রাজু রহমান	হরিন্ধোরা	01777957870	23525.00
C0100998	আলম ভাই	আলম ভাই	হারুলিয়া	01993913920	30000.00
C0100999	জোনাব মোঃ আব্দুর সাত্তার ভাই	জোনাব মোঃ আব্দুর সাত্তার ভাই	ওসমান কলোনী	01732875147	2449.00
C0101053	হাজী রোটন মোল্লা	হাজী রোটন মোল্লা	তেতুলঝোড়া	01671777727	27080.00
C0101068	সাহিন	সাহিন	সাপলা হাউজিং	01811299679	1640.00
C0101080	একটি রাজজাক স্যানিটারি	একটি রাজজাক স্যানিটারি	হেমায়েতপুর, মোল্লা বাজার	01678622794	9260.00
C0101082	লিটন		হরিন্ধরা	01727348685	34275.00
C0101102	হাজী আব্দুর রহিম		আলোমনোগর হাউজিং, রোড নং। 11/12	01317983088	68460.00
C0101112	বিসমিল্লাহ ইলেকট্রিক্স		আলিপুর	01833693212	45310.00
C0101125	ওহিদুর জামান		মধুমতি	01730448049	58015.00
C0101127	আবির মাসুম	মাসুম	হেমায়েতপুর	01866734790	209579.00
C0101152	হুমাউন	হুমাউন	হরিন্ধোরা	01712170987	111534.00
C0101154	আরিফ স্যানিটারি	আরিফ	ফুলবাড়িয়া	01889808578	134292.00
C0101171	তসলিমা	তসলিমা	উলাইল, মইলারমোড়	01308096192	10251.00
C0101176	বাদল		হরিন্ধোরা	01326823249	46774.06
C0101190	কমফোর্ট কালেকশন লি		চলন্তিকা হাউজিং	01711829047	177885.00
C0101252	আসলাম স্যানিটারি		কুন্ডা বাজার	01959108325	64493.44
C0101254	আলম	আলম	হেমায়েতপুর	01611906569	1610.00
C0101263	এনামুল	এনামুল	বাগবাড়ি	01740651888	137420.00
C0101270					-580.00
C0101285	বিসমিল্লা এন্টারপ্রাইজ	সোলিম ভাই	বাস্তা, সিংগাইর, মানিকগং	01825795971	40950.00
C0101287	আব্দুর রহিম ভাই	আব্দুর রহিম ভাই	জাউচোর	01710877921	107080.00
C0101296	ইঞ্জিনিয়ার আলামিন	ইঞ্জিনিয়ার আলামিন	আলোমনোগর হাউজিং	01701614214	11822.00
C0101297					-1705.00
C0101298	নেভিল স্যানিটারি	নেভিল স্যানিটারি	আমিন বাজার	01763388358	48676.00
C0101303	মোয়াজ্জেম	মোয়াজ্জেম	পূর্বহাটি	01987127100	9177.00
C0101306	ভাই ভাই স্যানিটারি	রুবেল হোসেন	NM:- 561915 + হাতিম:- 224319	01737139264	609364.00
C0101324	পূবালী হার্ডওয়্যার	তোফাজ্জেল হোসেন	জয়মনটব বাগান	01753864080	30100.00
C0101326	সোলেমান ভাই	সোলেমান ভাই	ভোরালী নোটুনপাড়া	01833685662	25940.00
C0101330	সাইফুল স্যানিটারি	সাইফুল ইসলাম	ধোল্লা	01813565878	135171.60
C0101373	মোঃ মমিন ভাই		ভোরালী, বটতলা	01983877311	29015.00
C0101375	মোঃ অলিউর রহমান		সোহিদুল্লাহ হাউজিং সোসাইটি	01712381400	820.00
C0101378	কামাল হোসেন		সোহিদুল্লাহ হাউজিং সোসাইটি	01639278215	27560.00
C0101382	মমিন ভাই- রুবেল মিস্ত্রি	মমিন ভাই- রুবেল মিস্ত্রি	জয়নাবাড়ি	01728547732	8378.00
C0101384	সিদ্দিকুর রহমান		জমুনার ইট ভাটা।	01624539070	30000.00
C0101389					-1500.00
C0101398	রাজু ভাই	রাজু	মুসোরিখোলা	01632889501	46194.06
C0101427	গোপাল সোরকার	গোপাল সোরকার	মুসোরিখোলা	01825306120	-1225.00
C0101439	ফেরদৌস		বঙ্গ সেতু	01790433791	21020.00
C0101441	ফয়সাল স্যানিটারি	ফয়সাল	আমিন বাজার	01991046103	66006.00
C0101452	সালেক ভাই	সালেক ভাই		01757817338	8614.00
C0101453	তেতুলঝোড়া সুপার মার্কেট	তেতুলঝোড়া সুপার মার্কেট	তেতুঝোরা	01643494052	22815.00
C0101461	মাহাদী স্যানিটারি	জোশিম ভাই	মোক্কা কান্দা সাভার	01855883918	92290.00
C0101466					-665.00
C0101468	ফুয়াদ	ফুয়াদ		01731713684	15200.00
C0101470	মা হার্ডওয়্যার	কিছু	হেমায়েতপুর	019111122255997	47330.00
C0101476					-600.00
C0101482	হাজী মোঃ সহিদুল্লাহ	হাজী মোঃ সহিদুল্লাহ	ভাগুর্তা	01922714546	11000.00
C0101501	তৌশিফ দরজা	মনির ভাই	হেমায়েতপুর	01828304451	124823.00
C0101504	ল্যাজ পলি		জোড়পুল	01810136609	25337.00
C0101549	মোঃ মুজিবুর রহমান	মুজিবুর	তেতুলঝোড়া	01645347047	4660.00
C0101560	শোবুজ	শোবুজ		01818502691	13410.00
C0101592	মরিয়ম হার্ডওয়্যার	মরিয়ম হার্ডওয়্যার	মধুমতি	01720053689	10750.00
C0101602					-150.00
C0101613	মাওলানা আবু সাইদ ভাই রহ	বলেন	জয়নাবাড়ি	01818576883	80689.00
C0101631	আনোয়ার হোসেন		ভাকুর্তা	01401774838	13200.00
C0101633	ব্যাবিলন	ব্যাবিলন	হরিন্ধোরা	01952710834	14650.00
C0101634	সোহেল ভাই	সোহেল	বলিয়ারপুর, ট্যাকার বাড়ি	01821440844	13172.00
C0101652	মহিউদ্দিন	মহিউদ্দিন	হেমায়েতপুর	01942561294	108742.00
C0101669	খুশবু হার্ডওয়্যার	খুশবু হার্ডওয়্যার	মোখরাকান্দা	01973083235	51941.00
C0101672	মোঃ সোহেল ভাই	মোঃ সোহেল ভাই	ভোরালী	01705049935	71170.00
C0101684	শাগর	শাগর	তেতুলঝোড়া	01720964505	18595.00
C0101694	জাফর ভাই	জাফর	ভোরালী	01716030300	34501.00
C0101695	ড্রাম ফ্যাক্টরি	ড্রাম ফ্যাক্টরি	আমিন বাজার	01984931974	17759.00
C0101696	জোনাব লাবলু ভাই	জোনাব লাবলু ভাই	বলিয়ারপুর	01676102322	3254.01
C0101733	বাবু		বলিয়ারপুর	01680248825	13909.00
C0101741	দুলাল মিয়া- রুবেলের যত্ন	দুলাল মিয়া- রুবেলের যত্ন	জয়নাবাড়ি	01743936374	7960.00
C0101751	সাদ্দাম খান		হেমায়েতপুর, নোটুনপাড়া	01681416159	31816.00
C0101752	মোঃ সাইফুল ভাই	মোঃ সাইফুল ভাই	ভোরালী	01830975272	58200.00
C0101761	আব্দুল কাইয়ুম		বলিয়ারপুর	01827745542	12022.00
C0101762					-2201.00
C0101789	মরিয়ম হার্ডওয়্যার	মরিয়ম	মুগরাকান্দা	01816052201	44040.00
C0101817	--	--		01970035957	3420.00
C0101844	মাহি সুজন		বাড়ি নং ৩৬, রোড ৬, জোনোটাহাউজিং	01915701828	122225.00
C0101848	মোঃ পরশ উল্লাহ	মোঃ পরশ উল্লাহ	nimertak	01712809311	172494.87
C0101855	দেলোয়ার হোসেন	দেলোয়ার হোসেন	হেমায়েতপুর, নোটুনপাড়া	01753736058	60193.14
C0101860					-1100.00
C0101877	ওমর ফারুক	ওমর ফারুক	horindhora	01731767977	191760.56
C0101888					-8855.00
C0101897	রশিদুল ইসলাম		রাস্তা নং 16, 5A Alomnogor হাউজিং	01768536607	5380.00
C0101901	আসাদুল্লাহ	আসাদুল্লাহ	মুগরাকান্দা, তুরাগ ব্রিকফিল্ড	01747903722	3570.00
C0101910	শোরব মো	শোরব মো	বোদুরচোর	01714051008	25000.00
C0101911	মোঃ মঞ্জু ভাই	মঞ্জু	তেতুলঝোড়া, হেমায়েতুপ্র	01713615570	8930.00
C0101919	মোঃ ইব্রাহিম		আমিন বাজার	01857022210	-1670.00
C0101923	মধু ভাই	মধু ভাই	আলোমনোগর	01309605787	2235.00
C0101929	হাজী মোঃ সহিদুল ইসলাম	হাজী মোঃ সহিদুল ইসলাম	তেতুলঝোড়া	01911904063	1618.00
C0101940	মোঃ বাবুল হোসেন	মোঃ বাবুল হোসেন	ভোরালী, নোটুনপাড়া	01776962055	120777.93
C0101964					-90.00
C0101982	রুনা আক্তার	রুনা আক্তার		01714237695	3298.00
C0101984	মান্নান এন্টারপ্রাইজ	বাদশা ভাই	মুশুরিখোলা	01822675995	12635.00
C0101985	মিলন ভাই	মিলন ভাই	হ্যাঙ্কি বঙ্গ	01816479741	26875.00
C0102004	মোঃ সাহিন ভাই	মোঃ সাহিন ভাই	ভোরালী	01675673022	5970.00
C0102015					-765.00
C0102026	মোঃ বাদল সাহেব	মোঃ বাদল সাহেব	জয়নাবাড়ি	01684293636	18940.00
C0102028	জুয়েল	জুয়েল	শাপলা হাউজিং	01787495796	280.00
C0102037	মোঃ কাইউম ভাই	কাইয়ুম	মেটকা	01818197082	21345.00
C0102038	আলহাজ্ব ভাই	আলহাজ্ব ভাই	বোনোগ্রাম	01675862205	12330.00
C0102063	আরিফুল ইসলাম	আরিফুল ইসলাম	জয়নাবাড়ি	01950038539	-3960.00
C0102071	আনিসুর রহমান	আনিসুর রহমান	ভোরালী, নোটুনপাড়া	01715292612	32775.00
C0102072	আলমগীর হোসেন		ফুটনগর, খালাপাড়া	01319253473	-1830.00
C0102101	মোঃ রোটন	মোঃ রোটন	বঙ্গ সেতু	01990515749	2080.00
C0102105	এমডি দুলাল সাহেব	এমডি দুলাল সাহেব	হরিন্ধোরা	01747847702	2300.00
C0102113	মোঃ রনি		শেমপুর	01709000394	-2825.00
C0102120	এরশাদ সানিয়ারী	এরশাদ	হরিন্ধোরা	01710256303	৩৩৭৭৯.০০
C0102123	মমিন ভাই	মমিন ভাই		016---	570.00
C0102134	দেলোয়ার ভাই	দেলোয়ার ভাই	কুন্ডা, জোমিদার পাড়া	01911153253	16920.00
C0102143	মাওলানা আল আমিন	মাওলানা আল আমিন	পূর্ব হাটি	01748895355	58519.00
C0102166	সোনকর বাবু	সোনকর বাবু	হারুলিয়া	01400982758	17975.00
C0102187	ইসাবাহ প্যাকেজিং	এশাবা প্লাস্টিক	ফুলবাড়িয়া	01923766279	0.04
C0102206	আব্দুল খালেক	খালেক	আলমনগর হাউজিং	01711373980	6855.00
C0102225	জোনাব সালাউদ্দিন	জোনাব সালাউদ্দিন	বলিয়ারপুর	01712104567	11135.00
C0102248	হাজী আবু তাহের	হাজী আবু তাহের	হরিন্ধোরা	01718361479	98439.12
C0102249	রাকিব		হরিন্ধোরা	01606089001	1070.00
C0102281	পলাশ	পলাশ	দোকান	0	275.00
C0102284	এইচ এম দেলোয়ার হোসেন	এইচ এম দেলোয়ার হোসেন	ধোকখিন সামপুর	01738265926	64041.95
C0102293	বেলাল ভাই	বেলাল ভাই	হেমায়েতপুর	01814918115	119618.96
C0102303	সোহান স্যার	সোহান স্যার	মোসারী খোলা	01736912280	5225.00
C0102307	মোঃ মাসুদ মিয়া	মাসুদ	শাপলা হাউজিং	01848080464	63450.00
C0102308	ইসমাইল ইলেকট্রিক	ইসমাইল	মানিক নাগর সিংগাইর	01648934540	95706.00
C0102370	শাওন আহমেদ	শাওন আহমেদ	সালেহপুর	01849299876	11205.00
C0102408	জোনাব বাহাদুর ভাই	বাহাদুর	জয়নাবাড়ি	01832984008	28310.00
C0102417	এখ	এখ	হরিন্ধোরা	01714788407	44400.00
C0102426	মোঃ মমিন আলী	মোঃ মমিন আলী	হারুলিয়া	01753192402	82775.00
C0102432	সুজন ছদ্র দাস	সুজন ছদ্র দাস	চান্দুলিয়া, আলমনগর হাউজিং	01676547771	35240.00
C0102442					-140.00
C0102447	মোঃ বিল্লাল হোসেন - মো. নাজরিন	মোঃ বিল্লাল হোসেন - মো. নাজরিন	ভোরালী, নোটুনপাড়া, মসজিদের পাশে	01994347330	48695.00
C0102473	মোঃ মনির হোসেন	মোঃ মনির হোসেন	সামপুর	01779245687	370.00
C0102497					-1210.00
C0102539	আজাদ ভাই	আজাদ ভাই	ভোরালী	01819140041	47235.00
C0102558	মঞ্জু মিয়া	মঞ্জু মিয়া	হেমায়েপুর	01731228752	42260.00
C0102564	মোঃ হাবিবুর রহমান	মোঃ হাবিবুর রহমান	বাগবাড়ি	01930080468	8875.00
C0102573	ইঞ্জি. জামাল	ইঞ্জি. জামাল	মিস্ট্রি	01791236559	11291.00
C0102593	মোঃ বাবলু মিয়া	মোঃ বাবলু মিয়া	আরজেন্টপাড়া	01715040588	24781.94
C0102635	সোদেশ ট্যানারি	nojrul islam	হরিন্ধোরা	01973619583	480.00
C0102640	নজরুল ইসলাম	নজরুল ইসলাম	ঝাউচোর, ৩নং। পাওয়া	01673619583	34784.96
C0102644					-470.00
C0102645	মোঃ সামসুল হক	মোঃ সামসুল হক	ধোল্লা	01732297141	21427.00
C0102683	আব্দুল সালাম	আব্দুল সালাম	হরিন্ধোরা	01726077522	28930.00
C0102741	হাফিজুল ইসলাম- মিস্ত্রি	হাফিজুল ইসলাম- মিস্ত্রি	শামপুর	01863828485	4630.00
C0102763	জোনাব মোঃ হাবিব সাহেব	জোনাব মোঃ হাবিব সাহেব	শেমপুর	01961198210	35760.00
C0102777	জোনাব মোঃ ইমান আলী	ইমান আলী	বাগবাড়ি	01856300531	13000.00
C0102785	রাজু মিস্ত্রি	রাজু মিস্ত্রি	আলোমনাগর	01821505084	2380.00
C0102861	মহিউদ্দিন সাহেব	মহিউদ্দিন সাহেব	জয়নাবাড়ি	01735294478	15085.00
C0102939	মোঃ মুকছেদ সাহেব- জাহাঙ্গীর	মুকছেদ	হরিন্ধোরা	01765907939	12960.00
C0102941	আব্দুর রহিম সাহেব- সুমন মিস্ত্রি	আব্দুর রহিম সাহেব- সুমন মিস্ত্রি	হারুলিয়া, দোকনপাড়	01822708787	17450.00
C0102942	শান্ত হোটেল	শান্ত হোটেল	হেমায়তপুর	01735385218	36600.00
C0102973	রুবেল	রুবেল	জয়না বারী	01676527325	18790.00
C0103031	মোঃ ইমরান ভাই	ইমরান	ঝাউচোর	0173944601	21335.00
C0103036	আলিফ স্যানিটারি	খায়রুল ইসলাম	মুগরাকান্দা	01821266009	75830.00
C0103055	উষা স্যানিটারি অ্যান্ড টাইলস হাউস		হেমায়েতপুর	01715-786403	10670.00
C0103063	মোঃ কবির হোসেন	মোঃ কবির হোসেন	হারুলিয়া	01921656007	28550.00
C0103083	ভুইয়া স্যানিটারি	ভুইয়া স্যানিটারি	সাভার	01710148957	2000.00
C0103085	মোঃ শাকিল আহমেদ	শাকিল	বলিয়ারপুর	01891728292	-100000.00
C0103087	জোনাব মিজান মিয়া	জোনাব মিজান মিয়া	বঙ্গ বরিজ, চেয়ারম্যান হাউজিং মো	01915161169	17538.00
C0103117	অনন্য হাসপাতাল	অনন্য হাসপাতাল	হেমায়েতপুর	01673471661	78354.05
C0103128	জোনাব ইলিয়াস ভাই	জোনাব ইলিয়াস ভাই	জয়নাবাড়ি	01819419346	8880.00
C0103142	মতিউর রহমান	মতিউর রহমান	হারুলিয়া	01906202204	2505.00
C0103161	জাহাঙ্গীর আলম		আলোমনাগর	01745317650	1217.00
C0103172	ল্যাজ পলি - উমোরের যত্ন	উমোর		01851865421	8270.00
C0103178	আতাউর রহমান	আতাউর রহমান	বাগবাড়ি	01732445073	46385.00
C0103183	দীন ইসলাম স্যানিটারি	দীন ইসলাম স্যানিটারি	আউয়াল মার্কেট	01839606998	51348.00
C0103192	আরাফাত হার্ডওয়্যার	আরাফাত হার্ডওয়্যার	কুন্ডা	01720181173	10539.00
C0103194	মাওলানা আসরাফুল ইসলাম	মাওলানা আসরাফুল ইসলাম	শাপলা হাউজিং	01960182982	9575.00
C0103220	মেহেদী হাসান	মেহেদী হাসান	ভাগুর্তা	01637679737	36425.00
C0103231	শাহানাজ বানু	শাহানাজ বানু	বলিয়ারপুর	01556321345	1955.00
C0103247	রাসেল ভাই -	আতিকের যত্ন	হারুলিয়া	01811993781	30515.00
C0103248	রফিজ উদ্দিন	রফিজ উদ্দিন	তেতুলঝোড়া	01817085983	10450.00

`;

