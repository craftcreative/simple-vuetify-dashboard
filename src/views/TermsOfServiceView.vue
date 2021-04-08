<template lang="html">
  <v-row >
    <v-col cols="12" sm="12" md="12"
    style="background-color:#110F1B;">
    <!-- NAV BAR - Component -->
    <v-container class="pl-sm-0 pr-sm-0" >
    <v-row
    v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl"
    justify="space-between"
    class="mt-6"
    >
    <div align="center" class="px-3" >
      <v-img
      height="45"
      width="32"
      @click="goToHome()"
      src="@/assets/image/logoSyncc.svg"
      ></v-img>
    </div>
    <div align="start">
      <v-img
      class="float-left mr-12"
      height="16"
      width="16"
      @click="goToInstagram()"
      src="@/assets/image/instagramIcon.svg"
      ></v-img>
    </div>
</v-row>
<v-row
v-else-if="this.$vuetify.breakpoint.sm"
justify="space-between"
class="mt-6"
style="padding-left:20px; padding-right:30px;"
>
<!-- style="width:36px; height:45px" -->
<div align="center" class="px-3" >
  <v-img
  class="ml-4"
  height="45px"
  width="32p"
  @click="goToHome()"
  src="@/assets/image/logoSyncc.svg"
  ></v-img>
</div>
<div style="vertical-align: top;">
  <v-img
  class="float-left mr-12"
  height="16"
  width="16"
  @click="goToInstagram()"
  src="@/assets/image/instagramIcon.svg"
  ></v-img>
</div>
</v-row>
<v-row
v-else
justify="space-between"
class="mt-6"
style="padding-left:13px; padding-right:23px;"
>
<!-- style="width:36px; height:45px" -->
<div align="center" class="px-4" >
<v-img
class="ml-4"
height="47px"
width="33px"
@click="goToHome()"
src="@/assets/image/logoSyncc.svg"
></v-img>
</div>
<div style="vertical-align: top;">
<v-img
class="float-left mr-12"
height="22.4"
width="22.4"
@click="goToInstagram()"
src="@/assets/image/instagramIcon.svg"
></v-img>
</div>
</v-row>

</v-container>
<!-- NAV BAR -->

<!-- SECTION - 1 - Privacy -->
<v-container style="padding:0px" class="mt-14 pa-sm-0 pr-sm-0">
  <h1 class="mb-2">Terms of service</h1>

<h3 class="mb-2">Introduction</h3>

<p class="pp">These terms of use (the “Terms”), together with the <a style="color:#FA5257" href="/legal/privacy-policy">Privacy Policy</a> apply to the access and use of the music software application SYNCC and all Service, software, products, features, materials and data accessed via the software application, which is provided by Muzyncc AB (publ) (collectively the “Syncc Service”).</p>
<p class="pp">Muzyncc AB (publ) is a public limited company incorporated under the laws of Sweden, having its principle place of business at Grevgatan 40, 11453, Stockholm registered at the Swedish Companies Registration Office with number 559224-7091 (hereinafter “SYNCC”, “We”, “Us” and/or “Our”).
</p>

<h3 class="mb-2">Service</h3>
<p class="pp">SYNCC provides its users (“You” and/or “Your”), the opportunity to listen to music together in real time, chat, share music and interact with different artists and other users via SYNCC’s community application which offers a social music platform.
</p>
<p class="pp">SYNCC Service are provided free-of-charge (“Free Service”). The SYNCC Service also require registration (please see section “Account”).</p>
<p class="pp">We utilize the Spotify API Services within our Service. You agree therefore to also be bound by Spotify’s Terms of Service when you connect your Spotify account to the Service. We do not copy or distribute music. The music available through SYNCC originates from other music service such as Spotify. You must be lawfully subscribed to or legally using their services from your own mobile device. The App enhances your use of such third party services.
</p>
<p class="pp">We do not copy, store, share or otherwise distribute music. We only use the meta-data of your lawfully obtained music, in order to share with other users your playlists and the particulars of the music you listen to (“Meta-Data”). The Meta-Data we share includes the names of tracks, artists and albums, length of tracks, source of tracks, track artwork and the play URL of tracks. </p>
<p class="pp">The Service lets you invite friends and contacts to join the Service. If you choose to invite them, invitations will be sent only on your behalf, not ours. You agree to send Invitations only to friends and contacts that you personally know and believe that they will enjoy and be interested in the Service.</p>

<h3 class="mb-2">Acceptance</h3>
<p class="pp">These Terms form a legally binding contract between You and SYNCC. By creating an account, installing or otherwise accessing and/or using the SYNCC Service, You acknowledge that You have read, understood and agree to be bound by these Terms and any other terms which are applicable to specific Service, products or features provided by SYNCC and separately agreed upon or otherwise made available to You. All such terms and conditions are incorporated into these Terms by reference. If You do not agree or cannot comply with all of these Terms, You may not access or otherwise use the SYNCC Service. You also acknowledge and accept that SYNCC may, at its sole discretion, suspend or cancel Your account or Your access to Your account, in accordance with below section “Termination” upon violation of the Terms.</p>

<h3 class="mb-2">Changes</h3>
<p class="pp">Syncc reserves the right to change the Terms at any time and for any reason. Any material changes to the Terms, will be notified to you by email to the email address provided by you. You are responsible for keeping yourself informed of any changes to the Terms. </p>

<h3 class="mb-2">Eligibility</h3>
<p class="pp">You must be at least 13 years of age to access, use or register for the SYNCC Service. If You are between the ages of 13 and 18 (or between 13 and the legal age of majority in the jurisdiction in which You reside), You may only use the SYNCC Service under the supervision of a parent or guardian who has reviewed and agrees to be bound by these Terms.</p>
<p class="pp">If You access, use or register for the SYNCC Service through a company, organization or the like (the “Company”), You represent and warrant that You are authorized to act on behalf of the Company and bind the Company to these Terms. The terms “You” and “Your,” as used throughout these Terms, apply to both You and the Company.</p>
<p class="pp">The SYNCC Service are not provided to You or a Company that has previously violated the Terms and/or has been removed from or prohibited from using the SYNCC Service.
Registration of an account in violation of what is stated under this section entitles SYNCC to, at its sole discretion, suspend or terminate the user account and/or Your access to it, in accordance with below section “Termination”.</p>

<h3 class="mb-2">Privacy Policy</h3>
<p class="pp">In order to provide You with the SYNCC Service, We may need to collect and process certain personal information about You. We process all personal data in accordance with <a style="color:#FA5257" href="/legal/privacy-policy">Privacy Policy</a> available on our website and in our application.
</p>

<h3 class="mb-2">Changes to the SYNCC Service</h3>
<p class="pp">We reserve the right to, at Our own sole discretion and from time to time, amend, modify as well as remove certain features of the SYNCC Service. We will notify You in advance by reasonable means, if the changes include any material changes that affect Your rights or obligations. We may also suspend and withdraw the SYNCC Service entirely, in which case we will notify You in advance by reasonable means.</p>

<h3 class="mb-2">User Guidelines</h3>
<p class="pp">You may use the SYNCC Service to the extent it is available to You, provided that You comply with these Terms, applicable law and the following user guidelines (“User Guidelines”):<br>
You represent and warrant that You will not:</p>
<p class="pp">1. use the SYNCC Service or any content contained therein, in violation of these Terms, applicable law or for its intended purposes;</p>
<p class="pp">2. alter, modify, adapt, sublicense, create any derivative works from, translate, sell, reverse engineer, decipher, decompile or otherwise disassemble any part of the SYNCC Service or its source code, or cause others to do so, save for expressly permitted by applicable law;</p>
<p class="pp">3. access, download, broadcast, display, sell, transmit, publish, distribute, copy, alter, modify, adapt, create any derivative works from, make use of, or reproduce in any way any copyrighted material, trademarks, trade names, service marks, or other intellectual property, content or proprietary information accessible through the SYNCC Service or otherwise make any use of the SYNCC Service or the content therein (i) except as expressly permitted under these Terms, (ii) without SYNCC’s prior written consent and, if applicable, the respective rights holders; or (ii) as permitted by applicable law;</p>
<p class="pp">4. use any robot, spider, crawler, scraper, proxy or other manual or automatic device, method or process to view, access or collect information from any website, server, software application, or other computer resource owned, used and/or licensed by SYNCC, including but not limited to the SYNCC Service;</p>
<p class="pp">5. Post User Content (as defined below) or otherwise engage in any activity to or through the SYNCC Service that is unlawful, discriminatory, infringing, offensive, threatening abusive, defamatory, pornographic, obscene, inflammatory, invasive of privacy or publicity rights, or that is intended to or does harm, harass or bully users of the SYNCC Service or other individuals or third parties;</p>
<p class="pp">6. collect, harvest or otherwise make use of personal information from other users of the SYNCC Service without their prior written consent;
</p>
<p class="pp">7. make unsolicited offers, advertisements, requests, proposals, or send junk mail to other users of the SYNCC Service;</p>
<p class="pp">8. encourage, endorse, promote or commit any activity that violates these Terms or applicable law, including but not limited to violations of intellectual property rights, publicity or privacy rights or any other proprietary rights of SYNCC or a third party;</p>
<p class="pp">9. use the SYNCC Service or otherwise engage in any activity that could interfere with, disrupt or negatively affect the SYNCC Service or the servers or network connected to the SYNCC Service;</p>
<p class="pp">10. impersonate or falsely claim affiliation with another person or entity or use or attempt to use another user’s account without authorization or prior written consent from such user and SYNCC or;</p>
<p class="pp">11. hack or otherwise attempt to circumvent any techniques employed by SYNCC in order to access the SYNCC Service or part thereof without having the authorization to access;</p>
<p class="pp">12. express or attempt to indicate any endorsement from SYNCC regarding You, any statements made by You or Your User Content;</p>
<p class="pp">13. upload viruses, Trojan horses or other malicious malware that could compromise the security or access of the SYNCC Service;</p>
<p class="pp">14. manipulate identifiers in order to disguise the origin of any information transmitted to or through the SYNCC Service;</p>
<p class="pp">15. use URL links, meta tags or code or other methods which contains reference to SYNCC or the SYNCC Service to direct someone to any other website for any purpose or falsely imply that such website is associated with SYNCC or the SYNCC Service.</p>
<p class="pp">16. use, access, or publish SYNCC’s application programming interface without Our written consent.</p>
<p class="pp">SYNCC reserves the right to terminate these Terms and thus suspend Your account immediately, without prior notice and at SYNCC’s sole discretion, where We reasonably consider that You have (i) violated these Terms and User Guidelines, (ii) misused the SYNCC Service, or (iii) acted in a way that SYNCC considers as inappropriate or unlawful, including such actions that have occurred outside the SYNCC Service.</p>

<h3 class="mb-2">Your Account</h3>
<p class="pp">Access to and use of certain features of the SYNCC Service require You to create an account with SYNCC. Upon creating an account, You will be required to provide Us with certain information about yourself prompted by Our registration process. It is important that You provide Us with true, accurate, complete and up-to-date information and that You maintain and update such information regularly.</p>
<p class="pp">It is not allowed to use someone else’s credentials when setting up a user account. By fulfilling the registration process and accepting the Terms, You confirm that You have complied with this section and that the account has not been set up using credentials that do not belong to You.</p>
<p class="pp">You agree not to disclose, share or otherwise provide access to Your login credentials to anyone or allow anyone other than You personally to access or use the SYNCC Service through Your Account. You are fully responsible for all activities that occur through use of Your user account and under Your credentials, as well as for maintaining the confidentiality of the credentials. You also agree to notify Us immediately of any unauthorized use of Your account (please see section “Contact Us”).</p>

<h3 class="mb-2">User Content</h3>
<p class="pp">You may, for whatever reason, post, upload, display, share, submit, transmit or otherwise contribute (“Post”) content to the SYNCC Service (including without limitation, photographs, graphics, images, text, messages, information, playlist titles, descriptions, compilations and other types of content made accessible to or through the SYNCC Service) (“User Content”) to be viewed by other users, participants or visitors of the SYNCC Service.
</p>
<p class="pp">To the extent fully permitted under applicable law, You hereby grant SYNCC (and its affiliates, assignees, successors, licensees and sub-licensees) an unlimited, perpetual, assignable, transferrable, sublicensable, irrevocable, worldwide, unconditional, non-exclusive, royalty-free license to use any and all User Content You Post, or that is Posted on Your behalf, to or through SYNCC Service, in any format or media now known or later developed or discovered. This license survives termination of the Terms (Please see section “Termination”).
</p>
<p class="pp">You represent and warrant that (i) You own the User Content or have the right to Post such User Content to or through the SYNCC Service; and (ii) such User Content, or its use by SYNCC, does not violate these Terms, applicable law or defame third parties or infringe any third-party right, including any copyright, privacy, publicity, or any other intellectual property or proprietary right, or imply any affiliation with or endorsement of You or Your User Content by SYNCC or any artist, band, label, entity or individual, unless agreed otherwise in writing.</p>
<p class="pp">You acknowledge that We have the right to, but no obligation, monitor and review any User Content that is Posted to or through the SYNCC Service. We reserve the right to, without notice at Our sole discretion and at any time, remove or disable access to any and all User Content Posted to or through the SYNCC Service that We consider violates these Terms, the User Guidelines, applicable law or may harm the reputation of SYNCC, the SYNCC Service, artists using SYNCC or any other affiliate, associate of business partner of SYNCC.</p>
<p class="pp">You are fully and solely responsible for any and all User Content that You Post to or through the SYNCC Service and that such User Content complies with these Terms, the User Guidelines, and applicable law. You agree to hold SYNCC indemnified in relation to any User Content as set forth in section “Indemnification” in these Terms.</p>

<h3 class="mb-2">License</h3>
<p class="pp">The SYNCC Service are owned and operated by Muzyncc AB. SYNCC and/or it’s licensors and the respective rights holders own the intellectual property rights to the SYNCC Service and all content, information and other material contained therein (excluding User Content). Save for the rights expressly granted to You in these Terms, SYNCC grants no right, title, or interest to You in the SYNCC Service or the content therein.</p>
<p class="pp">The SYNCC Service, the content therein and any software applications provided in connection with the SYNCC Service, are not sold or transferred to You. SYNCC, its licensors and the respective rights holders retain ownership of all copies of such Service, software applications and contents even after installation on Your personal computers, mobiles, tablets, and/or other devices. Any software provided by SYNCC or a third party may automatically download and install upgrades, updates, or other new features.</p>
<p class="pp">By agreeing to these Terms, You are granted a personal, limited, revocable, non-sublicensable, non-exclusive, non-commercial, non-assignable and non-transferrable license to access and make use of the SYNCC Service for purposes set out in these Terms (“License”). This License shall remain in effect until and unless terminated by You or SYNCC in accordance with section “Termination”.</p>
<p class="pp">You may not alter, modify, sell, sub-license, republish, reproduce, duplicate, copy, redistribute, assign, transfer or in any way exploit any part of the SYNCC Service or the content therein, except as expressly stated in these Terms. You agree to be abide by SYNCC’s User Guidelines and not to use the SYNCC Service and the content therein save for expressly stipulated herein.</p>

<h3 class="mb-2">Intellectual Property Rights</h3>
<p class="pp">All SYNCC intellectual property, including but not limited to trademarks, service marks, trade names, logos, domain names, and any other features of the SYNCC brand (“SYNCC Intellectual Property”) are the sole property of SYNCC and, where applicable, its’ from time to time licensees’. These Terms do not grant You any rights or license to use any SYNCC Intellectual Property, whether in whole or in part, in connection with any product or service, in any manner that is likely to cause confusion on the market or among customers, or that may have detrimental effect or cause harm to SYNCC Intellectual Property. Any and all use of SYNCC Intellectual Property requires Our prior written explicit consent thereof.</p>
<p class="pp">The SYNCC Service may also include display of other intellectual property, including but not limited to trademarks, service marks, trade names, logos and other brand features that are not SYNCC’s property (“Other Intellectual Property”). This may be the case for example if artists choose to use any such Other Intellectual Property in the artist’s use of the SYNCC Service. All Other Intellectual Property are the property of their respective owner. What is stated above applies mutandis mutatis on these Other Intellectual Property, meaning that these Terms do not grant You any rights or license to use any Other Intellectual Property whether in whole or in part, in connection with any product or service, in any manner that is likely to cause confusion on the market or among users, or that may have detrimental effect or cause harm to Other Intellectual Property. Any and all use of Other Intellectual Property can only be granted by the owner of the respective owner of the Other Intellectual Property.</p>

<h3 class="mb-2">Infringement</h3>
<p class="pp">The protection of intellectual property rights is important for SYNCC. SYNCC respects the rights of intellectual property owners. In the event that You are of the opinion that any content on the SYNCC Service infringes on your intellectual property rights, please contact Us and provide information regarding the claimed infringement and the rights on which You base the claim. SYNCC will take the actions that SYNCC, in its sole discretion, finds appropriate in the situation at hand. This may include removing the claimed content.
</p>

<h3 class="mb-2">Liability and disclaimer</h3>
<p class="pp">OTHER THAN WHAT IS PROVIDED IN THESE TERMS, AND IN FROM TIME TO TIME APPLICABLE MANDATORY LAW, SYNCC DOES NOT ISSUE ANY FURTHER GUARANTEES OR PROMISES REGARDING THE SYNCC SERVICE OR THE USE OF IT. THE SYNCC SERVICE IS PROVIDED “AS IS”, WITHOUT ANY EXPRESSED OR IMPLIED WARRANTIES REGARDING THE PERFORMANCE, USABILITY, QUALITY OR FITNESS FOR ANY SPECIFIC PURPOSE OF THE SYNCC SERVICE. IT IS SYNCCS INTENT THAT THE SYNCC SERVICE SHALL BE FULLY FUNCTIONAL, FREE OF MALWARE AND OTHER HARMFUL CONTENT AND COMPONENTS AT ALL TIMES. HOWEVER, THIS CANNOT BE GUARANTEED OR WARRANTED BY SYNCC. FURTHERMORE, SYNCC CANNOT ASSUME RESPONSIBILITY FOR ANY THIRD-PARTY APPLICATIONS (OR CONTENT THEREOF) OR USER CONTENT (WHETHER THIS IS IN THE FORM OF UPLOADED PHOTOS OR MESSAGES IN THE CHAT ROOMS OF THE SYNCC SERVICE).</p>
<p class="pp">SYNCC DISCLAIMS ALL LIABILITY AND IN NO EVENT SHALL SYNCC OR ITS SUPPLIERS BE LIABLE TO YOU FOR ANY CONSEQUENTIAL, INCIDENTAL OR SPECIAL DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF SAVINGS, LOSS OF GOOD WILL, BUSINESS INTERRUPTION, DATA LOSS OR COMPUTER FAILURE, DAMAGE OR MALFUNCTION, OR OTHER LOSS EXCEPT AS FOLLOWS FROM THE TERMS. WHAT IS STATED IN THIS CLAUSE APPLIES EVEN IF SYNCC HAS BEEN APPRAISED OF THE POSSIBILITY OF SUCH DAMAGES AND REGARDLESS OF THE THEORY (INCLUDING CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE, OR OTHERWISE) UPON WHICH SUCH CLAIM IS BASED.
</p>
<p class="pp">IN NO EVENT SHALL SYNCC’S TOTAL LIABILITY TO YOU FOR ALL DAMAGES (OTHER THAN AS MAY BE REQUIRED BY APPLICABLE LAW) EXCEED THE LOWER AMOUNT OF 10 000 SEK OR THE AMOUNT PAID BY YOU UNDER THESE TERMS DURING THE PRECEDING TWELVE (12) MONTHS. THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE HEREIN STATED REMEDY FAILS IN ITS ESSENTIAL PURPOSE.</p>
<p class="pp">Nothing in the Terms will limit or exclude SYNCC’s or Your liability for death or personal injury resulting from negligence, limit or exclude SYNCC’s or Your liability for fraud or fraudulent misrepresentation, limit or exclude SYNCC’s or Your liabilities that may not be limited or excluded under applicable law.</p>
<p class="pp">TO THE EXTENT THAT THE SYNCC SERVICE IS PROVIDED FREE OF CHARGE (THE FREE SERVICE), SYNCC WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE OF ANY NATURE FOR ANY REASON.</p>

<h3 class="mb-2">Third party software</h3>
<p class="pp">The SYNCC Service may include or otherwise interact with third party software available to You under separate license terms (the “Third Party Terms”).  Your use of such third party software in conjunction with the SYNCC Service in a manner consistent with these Terms is permitted; however, You may have additional rights or obligations under the applicable Third Party Terms and nothing in these Terms is intended to reduce or change Your rights to obtain and use such third party software under the Third Party Terms.</p>

<h3 class="mb-2">Notice regarding Apple</h3>
<p class="pp">If You have downloaded or obtained the SYNCC Service from Apple, Inc. (“Apple”), App Store or if You are using the App (“SYNCC Service App”) on an iOS device, You acknowledge that You have read, understood, and agree to the following notice regarding Apple.</p>
<p class="pp">- these Terms are concluded between You and SYNCC only, not with Apple, and Apple is not responsible for the SYNCC Service and content thereof;</p>
<p class="pp">- Apple has no obligation whatsoever to furnish any maintenance and support Service with respect to the SYNCC Service;</p>
<p class="pp">- In the event of any failure of the SYNCC Service to conform to any applicable warranty, You may notify Apple and Apple will refund any applicable purchase price for the SYNCC Service App to You; and, to the maximum extent permitted by applicable law, Apple has no other warranty obligation whatsoever with respect to the SYNCC Service;</p>
<p class="pp">- Apple is not responsible for addressing any claims by You or any third party relating to the SYNCC Service or Your possession and/or use of the SYNCC Service, including but not limited to: (i) product liability claims; (ii) any claim that the SYNCC Service fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy or similar legislation;</p>
<p class="pp">- Apple is not responsible for the investigation, defense, settlement, and discharge of any third party claim that the SYNCC Service and/or Your possession and use of the SYNCC Service App infringe that third party’s intellectual property rights;</p>
<p class="pp">- You agree to comply with any applicable third-party terms, when using the SYNCC Service App;</p>
<p class="pp">- You acknowledge and agree that Apple, and Apple’s subsidiaries, are third party beneficiaries of these Terms, and upon Your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against You as a third party beneficiary thereof;</p>
<p class="pp">- You hereby represent and warrant that (i) You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) You are not listed on any U.S. Government list of prohibited or restricted parties;</p>
<p class="pp">- You undertake to abide by the Usage Rules set forth in the App Store Terms of Service, applicable from time to time.</p>

<h3 class="mb-2">Termination</h3>
<p class="pp">You may terminate the Terms at any time by means of stop accessing and using the SYNCC Service and deleting Your account. Notwithstanding the foregoing, You acknowledge and agree that the license granted by You in relation to any and all User Content Posted by You is irrevocable and will therefore continue after termination of these Terms for any reason.
Where there is a cause, We reserve the right to immediately, at any time without notice, suspend, temporarily or permanently, Your access or Your account’s access to any or all parts of the SYNCC Service,or terminate the Terms including, but not limited to where We reasonably consider that (a) You have used the SYNCC Service in violation of these Terms or applicable law; (b) You fraudulently use or misuse the SYNCC Service; or (c) We no longer are able to continue providing the SYNCC Service due to legal, technical or legitimate business reasons.
</p>
<p class="pp">Notwithstanding what is stated above, SYNCC reserves the right terminate the Terms, without a cause, at any time, with thirty (30) days written notice. We will notify You in advance by reasonable means. The notice period will commence the day of the notice.
Upon termination, for whatever reason, You agree that SYNCC shall have no liability or responsibility to You.</p>

<h3 class="mb-2">MISCELLANEOUS</h3>

<h3 class="mb-2">Waiver</h3>
<p class="pp">The failure of SYNCC to exercise or enforce any right or provision under these Terms, shall not constitute a waiver of such right or provision.</p>

<h3 class="mb-2">Severability</h3>
<p class="pp">If any provision of these Terms is held invalid, or for any reason unenforceable, the remainder of these Terms shall continue in full force and effect.</p>

<h3 class="mb-2">Entire Agreement</h3>
<p class="pp">These Terms, together with the Privacy Policy which are agreed to by You, constitutes the entire agreement between You and SYNCC and supersedes any prior agreements relating to the subject matter herein, whether written or oral.</p>
<p class="pp">Please note, however, that certain aspects of Your use of the SYNCC Service may be governed by additional agreements, some of those additional terms are or will be posted on SYNCC’s website. To the extent that there is any irreconcilable conflict between any additional terms and these Terms, the additional terms shall prevail.</p>

<h3 class="mb-2">Assignment</h3>
<p class="pp">You may not assign or transfer these Terms, or any of the rights and licenses granted hereunder, in whole or in part, to any third party, and any such transfer or assignment shall be deemed void.</p>
<p class="pp">SYNCC may (i) assign or transfer these Terms, and any of the rights and licenses granted hereunder, in whole or in part, to a third party, as well as (ii) delegate any of its obligations under the Terms to a third party. Any such transfer or assignment will be communicated with You in advance, by reasonable means.</p>

<h3 class="mb-2">Survival</h3>
<p class="pp">Upon termination of these term, any provision which, by its nature is intended to survive termination, will survive such termination, including, but not limited to the sections “User guidelines”, “Intellectual property rights”, “Liability and disclaimer”, “Termination”, “Claims”, “Governing law and venue”, “Indemnification”, and “Disputes”.</p>

<h3 class="mb-2">DISPUTES</h3>

<h3 class="mb-2">Indemnification</h3>
<p class="pp">You agree, to the extent permitted under applicable law, to indemnify, defend and hold harmless SYNCC, its affiliated companies, contractors, employees, agents and its third-party suppliers, licensors, and partners from and against any and all claims, complaints, damages, losses, costs, liabilities and expenses, including reasonable attorney fees and costs, due to, arising out of, or relating in any way to Your access to or use of the SYNCC Service, any User Content You post, or Your breach of these Terms or the representations, warranties, and covenants made by You herein.</p>

<h3 class="mb-2">Governing Law & Venue</h3>
<p class="pp">Any disputes, controversy or claims arising out of or in connection with these Terms, are subject to the laws of Sweden, without regard to choice or conflicts of law principles.</p>
<p class="pp">Any dispute, controversy or claim arising out of or in connection with these Terms, or the breach, termination or invalidity thereof, shall be finally settled by arbitration administered by the Arbitration Institute of the Stockholm Chamber of Commerce (the “SCC”).
</p>
<p class="pp">The Rules for Expedited Arbitrations shall apply where the amount in dispute does not exceed EUR 100 000. Where the amount in dispute exceeds EUR 100 000 the Arbitration Rules shall apply. The Arbitral Tribunal shall be composed of a sole arbitrator where the amount in dispute exceeds EUR 100 000 but not EUR 1 000 000. Where the amount in dispute exceeds EUR 1 000 000, the Arbitral Tribunal shall be composed of three arbitrators. The amount in dispute includes the claims made in the Request for Arbitration and any counterclaims made in the Answer to the Request for Arbitration. The seat of arbitration shall be Stockholm and the language to be used in the arbitral proceedings shall be English, unless the parties agree to use Swedish as the language of the proceedings.</p>
<p class="pp">If You are a resident in any jurisdiction in which the provisions in the section above is found to be unenforceable, then the following shall apply:</p>
<p class="pp">Any disputes or claims arising out of or in connection with these Terms or the use of the SYNCC Service, will be governed by and construed under the laws of Your country of residence, and legal proceedings may be brought in Your local courts.</p>

<h3 class="mb-2">Claims</h3>
<p class="pp">Any claim arising out of or in connection with these Terms o must be brought within twelve (12) months after the event.</p>

<h3 class="mb-2">Contact us</h3>
<p class="pp">If You have any queries, complaints or suggestions regarding the SYNCC Service or these Terms or otherwise would like to contact SYNCC, please do so by e-mail at hello@syncc.app or by post at Grevgatan 40, SE-114 53 Stockholm.</p>


<p class="pp">&nbsp;</p>
<p class="pp"><b>Syncc team</b></p>

<p class="pp">Date 15.6.2020</p>
</v-container>
</v-col>
</v-row>
</template>

<script>
export default {
  methods:{
    goToInstagram(){
      window.open('https://www.instagram.com/synccapp/',"_blank");
    },
    goToHome(){
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="css" scoped>
.pp {
  letter-spacing:-0.05em
}
</style>
