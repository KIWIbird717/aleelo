export interface PostMessageOptions {
  blockType: GameChatBlock
  chatId: string
  response: GameChatBlockUserResponse | null
  message: string | null
}

export enum GameChatBlock {
  chooseSphere = 'chooseSphere',
  submitRequest = 'submitRequest',
  submitRequestExplain = 'submitRequestExplain',
  requestExamplesList = 'requestExamplesList',
  awesomeThenClickAndSetRequest = 'awesomeThenClickAndSetRequest',
  submitRequestFinal = 'submitRequestFinal',

  // Submit report
  submitStepUsefullness = 'submitStepUsefullness',
  submitReport = 'submitReport',

  // Submit report 1
  submitReport1 = 'submitReport1',
  submitReport11L = 'submitReport11L',
  submitReport11R = 'submitReport11R',
  submitReport12L = 'submitReport12L',
  submitReport12R = 'submitReport12R',

  // Submit report 2
  submitReport2 = 'submitReport2',
  submitReport21L = 'submitReport21L',
  submitReport21R = 'submitReport21R',
  submitReport22L = 'submitReport22L',
  submitReport22R = 'submitReport22R',

  // Submit report 3
  submitReport3 = 'submitReport3',
  submitReport31L = 'submitReport31L',
  submitReport31R = 'submitReport31R',
  submitReport32L = 'submitReport32L',
  submitReport32R = 'submitReport32R',

  // Submit report 4
  submitReport4 = 'submitReport4',
  submitReport41L = 'submitReport41L',
  submitReport41R = 'submitReport41R',
  submitReport42L = 'submitReport42L',
  submitReport42R = 'submitReport42R',

  // Submit report 5
  submitReport5 = 'submitReport5',
  submitReport51L = 'submitReport51L',
  submitReport51R = 'submitReport51R',
  submitReport52L = 'submitReport52L',
  submitReport52R = 'submitReport52R',

  // Submit report 6
  submitReport6 = 'submitReport6',
  submitReport61L = 'submitReport61L',
  submitReport61R = 'submitReport61R',
  submitReport62L = 'submitReport62L',
  submitReport62R = 'submitReport62R',

  // Submit onboarding report
  submitOnboardingReport = 'submitOnboardingReport',
  submitOnboardingReportResponse = 'submitOnboardingReportResponse',

  // Submit
  // report
  submitFinalStatistics = 'submitFinalStatistics',
  submitFinalReport = 'submitFinalReport',
  submitFinalReportAnotherSphere = 'submitFinalReportAnotherSphere',
  submitFinalReportAnotherSphereGeneral = 'submitFinalReportAnotherSphereGeneral',
  submitFinalReportAnotherSphereAssessSpheres = 'submitFinalReportAnotherSphereAssessSpheres',
  submitFinalReportSuggestedSphere = 'submitFinalReportSuggestedSphere',
  submitFinalReportSameSphere = 'submitFinalReportSameSphere',

  // Practices
  practiceStart = 'practice_start',
  practiceOut = 'practice_out',
  practiceHintsMotivation = 'practice_hints_motivation',
  practiceStartWriting = 'practice_start_writing',

  practiceDone = 'practice_done',
  practiceHintsMotivationDone = 'practice_hints_motivation_done',

  firstPractice = 'first_practice',
  practicePassed = 'practice_passed',
  practice_1_1 = 'practice_1_1',
  practice_2_1 = 'practice_2_1',
  practice_3_1 = 'practice_3_1',
  practice_4_1 = 'practice_4_1',
  practice_5_1 = 'practice_5_1',
  practice_6_1 = 'practice_6_1',
  practice_7_1 = 'practice_7_1',
  practice_8_1 = 'practice_8_1',
  practice_9_1 = 'practice_9_1',
  practice_10_1 = 'practice_10_1',
  practice_11_1 = 'practice_11_1',
  practice_12_1 = 'practice_12_1',
  practice_13_1 = 'practice_13_1',
  practice_14_1 = 'practice_14_1',
  practice_15_1 = 'practice_15_1',
  practice_16_1 = 'practice_16_1',
  practice_17_1 = 'practice_17_1',
  practice_18_1 = 'practice_18_1',
  practice_19_1 = 'practice_19_1',
  practice_20_1 = 'practice_20_1',
  practice_21_1 = 'practice_21_1',
  practice_22_1 = 'practice_22_1',
  practice_23_1 = 'practice_23_1',
  practice_24_1 = 'practice_24_1',
  practice_25_1 = 'practice_25_1',
  practice_26_1 = 'practice_26_1',
  practice_27_1 = 'practice_27_1',
  practice_28_1 = 'practice_28_1',
  practice_29_1 = 'practice_29_1',
  practice_30_1 = 'practice_30_1',
  practice_31_1 = 'practice_31_1',
  practice_32_1 = 'practice_32_1',
  practice_33_1 = 'practice_33_1',
  practice_34_1 = 'practice_34_1',
  practice_35_1 = 'practice_35_1',
  practice_36_1 = 'practice_36_1',
  practice_37_1 = 'practice_37_1',
  practice_38_1 = 'practice_38_1',
  practice_39_1 = 'practice_39_1',
  practice_40_1 = 'practice_40_1',
}

export enum GameChatBlockUserResponse {
  chooseAnotherSphere = 'chooseAnotherSphere',
  submitRequestExplain = 'submitRequestExplain',
  submitRequest = 'submitRequest',
  showRequestExamples = 'showRequestExamples',
  chooseSphereGlory = 'chooseSphereGlory',
  chooseSphereFamily = 'chooseSphereFamily',
  chooseSphereHealth = 'chooseSphereHealth',
  chooseSphereMoney = 'chooseSphereMoney',
  chooseSphereLove = 'chooseSphereLove',
  chooseSphereSpirituality = 'chooseSphereSpirituality',
  chooseSphereSelfRealisation = 'chooseSphereSelfRealisation',
  iAmReadyToComposeRequest = 'iAmReadyToComposeRequest',

  // Submit report
  submitReport = 'submitReport',
  submitReportSkip = 'submitReportSkip',
  submitStepUsefullness = 'submitStepUsefullness',

  // Submit report 1
  report1AboutMe = 'report1AboutMe',
  report1AboutOthers = 'report1AboutOthers',
  report1HelpMe = 'report1HelpMe',
  report1IKnow = 'report1IKnow',

  // Submit report 2
  report2AboutMe = 'report2AboutMe',
  report2AboutOthers = 'report2AboutOthers',
  report2HelpMe = 'report2HelpMe',
  report2IKnow = 'report2IKnow',

  // Submit report 3
  report3AboutMe = 'report3AboutMe',
  report3AboutOthers = 'report3AboutOthers',
  report3HelpMe = 'report3HelpMe',
  report3IKnow = 'report3IKnow',

  // Submit report 4
  report4AboutMe = 'report4AboutMe',
  report4AboutOthers = 'report4AboutOthers',
  report4HelpMe = 'report4HelpMe',
  report4IKnow = 'report4IKnow',

  // Submit report 5
  report5AboutMe = 'report5AboutMe',
  report5AboutOthers = 'report5AboutOthers',
  report5HelpMe = 'report5HelpMe',
  report5IKnow = 'report5IKnow',

  // Submit report 6
  report6AboutMe = 'report6AboutMe',
  report6AboutOthers = 'report6AboutOthers',
  report6HelpMe = 'report6HelpMe',
  report6IKnow = 'report6IKnow',

  // Submit onboarding report
  submitOnboardingReport = 'submitOnboardingReport',

  // Submit final report
  submitFinalReport = 'submitFinalReport',
  assessSphere = 'assessSphere',

  chooseThreeBestSpheres = 'chooseThreeBestSpheres',
  assessThreeBestSpheres = 'assessThreeBestSpheres',
  agreeToStartNewGame = 'agreeToStartNewGame',
  letsStartNewGame = 'letsStartNewGame',
  iWantToChooseAnotherSphere = 'iWantToChooseAnotherSphere',
  iWillChooseAnotherSphere = 'iWillChooseAnotherSphere',

  // Practice
  submitPracticeReport = 'submitPracticeReport',
  practiceDone = 'practiceDone',
  practiceAsk = 'practiceAsk',
  practiceStartWriting = 'practiceStartWriting',
  practiceHintsMotivationReady = 'practiceHintsMotivationReady',
}

export interface Pagination {
  limit: number
  offset: number
}
