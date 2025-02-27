[33mcommit 794aa750e9af65fc4e3dd4dd3161dfc5f0ca8d4a[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mUI-registration-validation[m[33m, [m[1;31morigin/UI-registration-validation[m[33m)[m
Author: Erlend Skutlaberg <skutlis98@gmail.com>
Date:   Wed Feb 26 16:15:36 2025 +0100

    Changed from regex to the same validation as the backend. The error messages are prop drilled to the textinput components. No requests are made in the registration unless we are certain that both the email and password contains the correct format. Also contains provides a message if the email is already in use. gg

[33mcommit 17a49069a652bcdc804efeeb31c3087326b45999[m
Merge: aab5f5a 4c6b63d
Author: Erlend Skutlaberg <skutlis98@gmail.com>
Date:   Wed Feb 26 12:35:55 2025 +0100

    Merge branch 'test' into UI-registration-validation

[33mcommit 4c6b63d719e1592685e5a10e8f61fe144580eaad[m[33m ([m[1;31morigin/test[m[33m)[m
Author: Erlend Skutlaberg <skutlis98@gmail.com>
Date:   Wed Feb 26 12:29:14 2025 +0100

    Testing some features

[33mcommit aab5f5a64291e6ea8a9d621eb23861b18b042e60[m
Author: Sander Rasmussen <sander.rasmussn@gmail.com>
Date:   Wed Feb 26 12:25:59 2025 +0100

    added standard pattern to form

[33mcommit 8e64d189b44cde3dee4b9e2c42870c044d7741c7[m
Author: Sander Rasmussen <sander.rasmussn@gmail.com>
Date:   Wed Feb 26 10:52:41 2025 +0100

    added password input validation in register from

[33mcommit 5d64ac8425a8b0c5f16eec4d3d50cae2f8168c57[m[33m ([m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m, [m[1;32mmain[m[33m)[m
Merge: ede5941 0635645
Author: Sander Rasmussen <102761818+sanderrasmussen@users.noreply.github.com>
Date:   Wed Feb 26 09:24:09 2025 +0100

    Merge pull request #2 from boolean-uk/fixPrettier
    
    Set the endOfLine parameter for prettier to auto

[33mcommit 063564547f9066f3752ba102eb528f155d8c174b[m[33m ([m[1;31morigin/fixPrettier[m[33m)[m
Author: Erlend Skutlaberg <skutlis98@gmail.com>
Date:   Wed Feb 26 09:01:36 2025 +0100

    Set the endOfLine parameter for prettier to auto

[33mcommit ede5941b6442ee0f15559a6af71a6ccade176970[m[33m ([m[1;31morigin/fix_prettier[m[33m)[m
Author: Carlo M <carlo992@gmail.com>
Date:   Fri Oct 25 07:53:18 2024 -0600

    Update .prettierrc to use lf end of line

[33mcommit 3e093e41fd42d0e7697055d21d23bdcea9a01fc3[m
Author: Carlo M <carlo992@gmail.com>
Date:   Tue Oct 22 06:39:23 2024 -0600

    Added eslint and prettier configuration

[33mcommit a6d96fb96b7ee8209d29a7d92ff6a03c7ef1c5b4[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 30 16:31:03 2023 +0000

    Update README.md

[33mcommit fd0589c4983f4b95ecbf0614869e111ddf2435cb[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 30 16:30:26 2023 +0000

    Update README.md

[33mcommit da37c2eb27748cec99c7bf98a4f69b52e60b2244[m
Merge: 8270ce4 758a47f
Author: Edward Withers <dearshrewdwit@gmail.com>
Date:   Mon Jan 30 09:38:38 2023 +0000

    Merge pull request #22 from boolean-uk/dependabot/npm_and_yarn/web-vitals-3.1.1
    
    Bump web-vitals from 2.1.4 to 3.1.1

[33mcommit 8270ce48d365d8aa334367ff5c6311eaa3cfe696[m
Merge: ea3eb07 8fe8bfc
Author: Edward Withers <dearshrewdwit@gmail.com>
Date:   Mon Jan 30 09:38:20 2023 +0000

    Merge pull request #21 from boolean-uk/dependabot/npm_and_yarn/testing-library/user-event-14.4.3
    
    Bump @testing-library/user-event from 13.5.0 to 14.4.3

[33mcommit ea3eb071590602e3973ecc777d83b3978148f540[m
Merge: 6cfbacd 4fd8377
Author: Edward Withers <dearshrewdwit@gmail.com>
Date:   Mon Jan 30 09:37:45 2023 +0000

    Merge pull request #20 from boolean-uk/dependabot/npm_and_yarn/react-router-dom-6.8.0
    
    Bump react-router-dom from 6.6.2 to 6.8.0

[33mcommit 4fd83772fd4aeed68f1d96de3af691135ad8c962[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 30 09:34:24 2023 +0000

    fix render issue

[33mcommit 6cfbacd685dbcb716ee5b84a9fbee9de07233aef[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 30 09:23:54 2023 +0000

    add empty credential login guard

[33mcommit 758a47f6ca790c55a323597c30616de9de8aff83[m
Author: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
Date:   Fri Jan 27 15:26:08 2023 +0000

    Bump web-vitals from 2.1.4 to 3.1.1
    
    Bumps [web-vitals](https://github.com/GoogleChrome/web-vitals) from 2.1.4 to 3.1.1.
    - [Release notes](https://github.com/GoogleChrome/web-vitals/releases)
    - [Changelog](https://github.com/GoogleChrome/web-vitals/blob/main/CHANGELOG.md)
    - [Commits](https://github.com/GoogleChrome/web-vitals/compare/v2.1.4...v3.1.1)
    
    ---
    updated-dependencies:
    - dependency-name: web-vitals
      dependency-type: direct:production
      update-type: version-update:semver-major
    ...
    
    Signed-off-by: dependabot[bot] <support@github.com>

[33mcommit 8fe8bfcec2417a04288e96eeca4201c084fad695[m
Author: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
Date:   Fri Jan 27 15:26:02 2023 +0000

    Bump @testing-library/user-event from 13.5.0 to 14.4.3
    
    Bumps [@testing-library/user-event](https://github.com/testing-library/user-event) from 13.5.0 to 14.4.3.
    - [Release notes](https://github.com/testing-library/user-event/releases)
    - [Changelog](https://github.com/testing-library/user-event/blob/main/CHANGELOG.md)
    - [Commits](https://github.com/testing-library/user-event/compare/v13.5.0...v14.4.3)
    
    ---
    updated-dependencies:
    - dependency-name: "@testing-library/user-event"
      dependency-type: direct:production
      update-type: version-update:semver-major
    ...
    
    Signed-off-by: dependabot[bot] <support@github.com>

[33mcommit d7282c56e89010cc392e6b74665bc1a33240b27b[m
Author: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
Date:   Fri Jan 27 15:25:55 2023 +0000

    Bump react-router-dom from 6.6.2 to 6.8.0
    
    Bumps [react-router-dom](https://github.com/remix-run/react-router/tree/HEAD/packages/react-router-dom) from 6.6.2 to 6.8.0.
    - [Release notes](https://github.com/remix-run/react-router/releases)
    - [Changelog](https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/CHANGELOG.md)
    - [Commits](https://github.com/remix-run/react-router/commits/react-router-dom@6.8.0/packages/react-router-dom)
    
    ---
    updated-dependencies:
    - dependency-name: react-router-dom
      dependency-type: direct:production
      update-type: version-update:semver-minor
    ...
    
    Signed-off-by: dependabot[bot] <support@github.com>

[33mcommit 564c818c73bb8c7ac8a2779e5fc06217a07da3b3[m
Author: Edward Withers <dearshrewdwit@gmail.com>
Date:   Fri Jan 27 15:25:18 2023 +0000

    Create dependabot.yml

[33mcommit 8480fc8015f062a029599ba3247909e841bf7f50[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 27 12:52:47 2023 +0000

    fix container height

[33mcommit adc812bec472b0f5757892188cbb174b3baa7997[m
Merge: 1e568ef ecdd86b
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 27 12:31:00 2023 +0000

    Merge pull request #19 from boolean-uk/vherus-#8-auth
    
    use real API

[33mcommit ecdd86b7ab12ce03331b3ba508bf37e92fa8cd7c[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 27 12:30:03 2023 +0000

    use real API

[33mcommit 1e568ef07a5b056f9f4f89ab012585df3af6ed32[m
Merge: 6675bee 7c92859
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 27 09:04:24 2023 +0000

    Merge pull request #18 from boolean-uk/chris2733-#5-toast
    
    Toast Component

[33mcommit 7c92859c8a141dbad0bf2985cfbcaafaf3d5a1df[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 27 09:03:50 2023 +0000

    use props

[33mcommit ef62ccf21daa56591f85c88be4ce622f03aa72ee[m
Merge: f1b9e9b 6675bee
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 27 00:01:01 2023 +0800

    Merge branch 'main' into chris2733-#5-toast

[33mcommit 6675bee0281001e7bc877cdcbd74c69c40b4bb28[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 11:44:27 2023 +0000

    remove unused prop

[33mcommit dfc894aac1ed01e8b10bf1b3b90b5bf854a590fc[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 11:43:31 2023 +0000

    add localStorage interactions for token

[33mcommit cb90d3c5011be753c7f43e25584e2ae9d25ef000[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 11:29:24 2023 +0000

    fix warnings

[33mcommit 6fa800ba274055d308a137b98fadb66eb59d66ee[m
Merge: 1d96341 9677055
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 11:22:27 2023 +0000

    Merge pull request #17 from boolean-uk/chris2733-#5-cascading-menu
    
    Chris2733 #5 cascading menu

[33mcommit 9677055666ad14b9e248c5119642e21518dabd38[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 11:21:24 2023 +0000

    refactor cascading menu into components

[33mcommit bb0ab4c38ffc43ebc0e90c55ff31b93417a1b502[m
Merge: 1fadf03 1d96341
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 09:52:35 2023 +0000

    Merge branch 'main' into chris2733-#5-cascading-menu

[33mcommit 1fadf0396fc7e6eab942b20d7e234c703d91b977[m
Merge: 0c61926 179eee5
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 09:51:58 2023 +0000

    Merge branch 'main' into chris2733-#5-cascading-menu

[33mcommit 1d963418d29dae01b055bd36258d4e68128d74b7[m
Merge: ccaa8cd f01587c
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 09:51:30 2023 +0000

    Merge pull request #16 from boolean-uk/chris2733-#4-tidy-css
    
    Chris2733 #4 tidy css

[33mcommit f01587c55f99da5552843f244e77724ccb78584d[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 09:50:37 2023 +0000

    remove unused import

[33mcommit 179eee539c8a9674749b67c4a6b7c7390b2aa36d[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 09:12:32 2023 +0000

    remove default maxsteps

[33mcommit ccaa8cdf9925aa8db983be03748a5c6e7dd0a645[m
Merge: fb1ebb7 6e0a4b4
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 26 09:11:31 2023 +0000

    Merge pull request #15 from boolean-uk/vherus-#1-user-registration
    
    Hook up welcome form to registration, add Stepper component

[33mcommit 0c61926bf444df8d2bb1a7b8d031964426534524[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Thu Jan 26 03:12:18 2023 +0800

    setup cascading menu component with icons

[33mcommit f1b9e9b83081f5c39bc48ccb9b858128c729d062[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Thu Jan 26 02:03:43 2023 +0800

    creating toast component

[33mcommit fb1ebb7fdd4f9292de55a9d45d5e670ae535cc41[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Thu Jan 26 01:28:32 2023 +0800

    Revert "tidying css, using more global files"
    
    This reverts commit e38eabcc07b4bdc0da74a8548cb63704100a5cb2.

[33mcommit e38eabcc07b4bdc0da74a8548cb63704100a5cb2[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Thu Jan 26 01:18:22 2023 +0800

    tidying css, using more global files

[33mcommit 6e0a4b43addac3e11e013d84c17236e09e700c2d[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Wed Jan 25 12:33:24 2023 +0000

    add stepper component

[33mcommit f74922f79fa5e1f4c5d2670ea54186339dd09b06[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Wed Jan 25 11:13:15 2023 +0000

    connect registration components

[33mcommit 6fe4b3c61cd29831e1ebeda7c1499f0f1851e048[m
Merge: 79dbc2e d5ebbd1
Author: Nathan King <nathanking3590@gmail.com>
Date:   Wed Jan 25 09:05:30 2023 +0000

    Merge pull request #14 from boolean-uk/chris2733-#3-user_profile
    
    Chris2733 #3 user profile

[33mcommit d5ebbd1e280a3c085b745eeb23ec068e5d43601a[m
Merge: 016472f 79dbc2e
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Wed Jan 25 02:44:43 2023 +0800

    Merge branch 'main' into chris2733-#3-user_profile

[33mcommit 016472fd3900bc550ff4625bae1c4bd6c12add36[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Wed Jan 25 02:43:18 2023 +0800

    adding welcome second step, another global class

[33mcommit b446e4dbb802af00709cac6492a3c2b5322820fb[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Wed Jan 25 02:10:14 2023 +0800

    welcome form header styling

[33mcommit 79dbc2e54d4b6ba1c41b286e156dd9396dd2219b[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Tue Jan 24 15:25:19 2023 +0000

    prevent search bar from submitting

[33mcommit 9955a05c2efae49ab3664e0a664f9862428fbf1b[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Tue Jan 24 15:20:53 2023 +0000

    remove logout from sidebar

[33mcommit d6a5755fdb9bce2b1d42956579ea41b9b6d461ca[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Tue Jan 24 15:19:55 2023 +0000

    add profile icon click dropdown

[33mcommit f43b1700f30cb92a67ee169df478409f2e8773e5[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Tue Jan 24 14:41:47 2023 +0000

    add optional icons to inputs

[33mcommit 92db77f452bef3321ff23135eb6af9687c4b3b51[m
Merge: 7b2d6d2 0d7fabe
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 14:50:16 2023 +0000

    Merge branch 'vherus-#6-modals'

[33mcommit 0d7fabec85177fd5fc772211368cc4e97f046dc6[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 14:49:53 2023 +0000

    update styles

[33mcommit 7b2d6d2452104a06d248635a426e20f424584c6c[m
Merge: a012aa5 32fbbe8
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 14:49:24 2023 +0000

    Merge pull request #12 from boolean-uk/vherus-#6-modals
    
    #6 modals

[33mcommit 32fbbe88e1ceaa4f0d12b657982a3ad478531933[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 13:51:29 2023 +0000

    add create post input styling

[33mcommit 6a47a40ab1f88f43892e90fbd399aac807a5e6a2[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 13:41:04 2023 +0000

    add border styling

[33mcommit 76354b34f902e09d1638e3a143e65b214ba1751a[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 13:01:08 2023 +0000

    add comments for modal usage

[33mcommit bd4d0e1f24d7f9bce6157fe348935d750f2910d7[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 12:54:26 2023 +0000

    make modal reusable

[33mcommit df273fc6d7973b2ad762bf24ab8441f1cd6ef225[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 12:11:45 2023 +0000

    remove unused import

[33mcommit 04c65bfa8da4554e820f7cba9cf50038f231c062[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 12:08:57 2023 +0000

    simplify conditional render

[33mcommit 8eb71ca6abb51942aecb0e86de85c2e7bcc7e0e4[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 12:08:18 2023 +0000

    remove float

[33mcommit 3a3f4ea00f082225052dc6f9fd2b2b582f4a2eec[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 12:07:48 2023 +0000

    add modal button styling

[33mcommit 1fc3728aa10e460ca76f5889174f4b0cf6ccc217[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 11:43:06 2023 +0000

    change modal styling

[33mcommit d23c24085a15ba07c1983c54dc59cd15d0e4fd1f[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 11:28:23 2023 +0000

    add styling to modal with example code

[33mcommit 395142735ea542a0bda15432ce9804cffabe32b7[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 10:44:57 2023 +0000

    add modal context provider

[33mcommit a012aa56f3109de414e061b29377280501604a08[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 09:12:24 2023 +0000

    fix post class name

[33mcommit b7ff2a37190c611ee2cdbc69edee68d490dce401[m
Merge: 23f926b 404f9f4
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 09:11:10 2023 +0000

    Merge pull request #11 from boolean-uk/chris2733-#4-layout
    
    Chris2733 #4 layout

[33mcommit 404f9f4fe15f433d785be52c604fbeef1590cbcf[m
Merge: b71fb01 7ea6628
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 09:10:37 2023 +0000

    Merge pull request #10 from boolean-uk/vherus-#5-dashboard
    
    Dashboard Layout & Styling

[33mcommit 7ea662827eb08312a900e0720a7debd32fe003cc[m
Merge: 21bf2fb b71fb01
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 23 09:04:44 2023 +0000

    merge changes

[33mcommit b71fb0157393e43650d2d3ebb9c25cb31fb435ce[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Sat Jan 21 01:00:46 2023 +0800

    welcome styling

[33mcommit 62d6b541540e6180260fa3bab7ba5c744b8fe3f6[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Sat Jan 21 00:58:57 2023 +0800

    better css global variable names

[33mcommit be89952a6d67536ccfc0f29e6efcdcfc1f84c41c[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Sat Jan 21 00:57:18 2023 +0800

    setup steps component

[33mcommit 862969b3084b7a97532f55b4c8dc14096717dee1[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 23:50:22 2023 +0800

    add light grey color, fix text color default

[33mcommit 029a0dbbe70c8e32e1dc68552cedd1c2a7bc2914[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 23:50:02 2023 +0800

    fix grid center align

[33mcommit d55920254549127da7d4e2f01bd4fe17a7a91fd0[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 23:34:03 2023 +0800

    add disablesnav option for navigation, linting

[33mcommit 72c5cf1104a01ca34c5a29a075029ea591d44312[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 23:33:27 2023 +0800

    setup welcome page and route

[33mcommit 21bf2fb52729101a8073dbee9cd37fd4a1647a8c[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 20 11:59:49 2023 +0000

    update posts styles

[33mcommit ad5543a14894b7cdc19dbd3bb40af227246f54fe[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 20 11:49:10 2023 +0000

    add user initials to profile icon on post

[33mcommit 09576a1aa1e76082ed002b757b761c766ed6e1fa[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 20 11:42:54 2023 +0000

    add post likes conditional render

[33mcommit cc986fff900370b6cf460024cd883c3e12d28b70[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 20 11:40:32 2023 +0000

    change padding on dashboard grid

[33mcommit 14c273e5b2cf0a1419b3b421f16319f7a127a0b1[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 20 11:38:14 2023 +0000

    add post styling

[33mcommit d16fd55dd3b03ff83abb3eab33f2d8bc2037384e[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 20 11:00:30 2023 +0000

    add card component

[33mcommit e07572c787fe36efb74a63979ca274f134767c9f[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Fri Jan 20 10:46:18 2023 +0000

    add dashboard styling

[33mcommit 3ed14c9d319b7575a36d71e52196a4c7c06f08a6[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 02:54:27 2023 +0800

    fix socialbutton hover

[33mcommit 7800755ad8f4cda7973f11285eb287faf90768e7[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 02:51:12 2023 +0800

    setup verification page

[33mcommit c15a6adc9b2dd7d514d41d34afb16a6a5cec78fc[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 02:34:23 2023 +0800

    simplify credential css

[33mcommit 2108856ad5db82b34ee9bfc97b1707f958a3affa[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 02:24:29 2023 +0800

    tweak register and login classes

[33mcommit d0524ab0e63195ce9fa1eeffad71d9582713c7be[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 02:12:15 2023 +0800

    setup register page

[33mcommit d8be325b191726672addd2f85425c5c461f76fa5[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 01:55:38 2023 +0800

    credentials card and sociallinks components

[33mcommit dd3604dcaa37657a75302db0c5035454a57e56b3[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Fri Jan 20 01:52:32 2023 +0800

    button style tweak

[33mcommit abda634df4859fbab35a70c96c4827359ac14df1[m
Merge: 03573f3 e61eb40
Author: Chris <chris_law9208@hotmail.co.uk>
Date:   Thu Jan 19 14:27:16 2023 +0000

    Merge pull request #9 from boolean-uk/vherus-#4-layout
    
    add grid layout to protected routes

[33mcommit e61eb401c2444653328ddab80cca4ccd0687b0cb[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Thu Jan 19 11:45:07 2023 +0000

    add grid layout to protected routes

[33mcommit 03573f3c92d30935a5665e00218f51674ba09bf8[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Wed Jan 18 03:30:29 2023 +0800

    add loader screen and styling

[33mcommit 18dc9fbc4daba47e26d02e5fa00ff55086e6c6f3[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Wed Jan 18 02:54:38 2023 +0800

    add social link buttons

[33mcommit 11fcb47208a6a076881f329ee227d7416810b665[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Wed Jan 18 02:42:20 2023 +0800

    fixing formm styling, adding password hide

[33mcommit 717572fd7d2e8b5b1bd40ec55e14b367c4e1c4fb[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Wed Jan 18 02:42:10 2023 +0800

    fix button styling

[33mcommit 41822b298435809f97c7afea414c13cef867e806[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Wed Jan 18 01:23:10 2023 +0800

    better classes, more grid less flex

[33mcommit 196b21c587abf1f7a4f682a96ad6a1b6d0ab3ab5[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 02:30:59 2023 +0800

    break up css into files, format textinput js

[33mcommit 1e2ef0ade5f9bde90a87af0b4642540ad03b7f49[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 01:59:32 2023 +0800

    add button styling and variations

[33mcommit 2adbf892bcccc5125fdde85e4d76d90d271c6ceb[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 01:53:13 2023 +0800

    login page styling

[33mcommit 8d5da6983bf79dd1aff696988563266cacd7c4ef[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 01:53:02 2023 +0800

    add global text, button and font size

[33mcommit 8f7b2dc5e84fc61e825af53f1cbe1f5e0978abfb[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 01:31:49 2023 +0800

    login button and more styling

[33mcommit cbce9509887cfcbc08c6e9cfb87c95afd4257af5[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 01:26:24 2023 +0800

    add more color classes, button styling and class props

[33mcommit eef923ff4cd7635e1b23228c07caf993adc23862[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 00:58:46 2023 +0800

    adding logo to login and css

[33mcommit 375ffa9bd9a2cbb58cbbd75f6d74d8afcab0c9b6[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 00:58:31 2023 +0800

    add reset css, heading default styling

[33mcommit f17122ae6155591e84d7458cb54bd1d97e001fa1[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 00:33:39 2023 +0800

    adding lexend font and setup

[33mcommit a5714a3058acaeaca6897d227952d09e1c64557d[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 00:29:56 2023 +0800

    jsreact emmet fix

[33mcommit 570b0e9fd976145ae873b9670319a0b18510e2de[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 00:12:18 2023 +0800

    formatting app and index js

[33mcommit 34683c48c4e15edff146e5be18b28cbaaa66cccc[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 00:12:07 2023 +0800

    resetting appjs css

[33mcommit 7a68d78d963f6acc9311889cd57b306864f0d0f1[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 00:11:41 2023 +0800

    set css globals, login css

[33mcommit 20c4345e31e1df1e0b555079cc16766a33ef55b2[m
Author: Chris Law <chris_law9208@hotmail.co.uk>
Date:   Tue Jan 17 00:10:57 2023 +0800

    setting up workspace for consistency

[33mcommit 23f926b11df22bb6e070dcb192801cb95f2b53f3[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 16 11:17:23 2023 +0000

    use mock API client for component data

[33mcommit 8bc68794de837962988a9106e6a2ff612a7a4ef3[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 16 11:14:27 2023 +0000

    add mock api interactions

[33mcommit feb2e263a5aca27a6fe185a6260e2dce21ee0df5[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 16 10:46:10 2023 +0000

    move header, nav components

[33mcommit ebabfa8ea357feb5599b7382561243e8a39cb709[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 16 10:41:10 2023 +0000

    add post component skeleton

[33mcommit 91474a67574540e8a367759f55e3763698a2fb5d[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 16 10:26:54 2023 +0000

    add skeleton login & register

[33mcommit 9006ce502209d2c79e82f5fba5ce7476eb056535[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Mon Jan 16 10:10:00 2023 +0000

    add protected route & auth layer

[33mcommit 785a7817d57b3657b7913337d4564fd6e5e0309d[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Tue Jan 10 18:03:13 2023 +0000

    add auth context skeleton

[33mcommit 9413ff8de99f51f91c1057584726f863153ead00[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Tue Jan 10 17:01:17 2023 +0000

    update README.md, add branch naming convention

[33mcommit 8239114e56feb6d56760446ce42e394fa469d217[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Tue Jan 10 16:53:25 2023 +0000

    add react app template

[33mcommit 1495df4c046ee3dde572df6db2b49d456d1c3938[m
Author: Nathan King <nathanking3590@gmail.com>
Date:   Tue Jan 10 16:41:53 2023 +0000

    add .gitignore
