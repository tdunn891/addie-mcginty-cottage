# Milestone Project 1 - Addie McGinty's Cottage

## Project Purpose

This project aims ultimately to increase annual holiday rental income of my family's beach cottage in Robe, South Australia.

## User Experience Design

#### Strategy

In order to set the business objectives and user needs of the site, a meeting was set up with the client, the owner of Addie McGinty's cottage, my father, Phil Dunn.

The client gave background that the existing marketing strategy for the property was ineffective - simply a listing on the holiday rentals website. Over the previous 10 years, this strategy has yielded very low annual rental income, despite the uptick in vistor numbers to the town. The client agreed that a dedicated website (this project) would be an ideal means to take advantage of this trend. The property's existing Google Maps listing is to be populated with a link to this site.

The client expressed the following Business Objectives and User Needs.

Business Objectives:

- Increase annual rental bookings (and thereby income) by 20%.
- Increase awareness of the cottage as desirable place to stay.
- Increase awareness of Robe as a domestic holiday destination.
- Showcase nearby attractions and activities in Robe.

User Needs:

The target audience is holidaymakers, particularly families, looking for a holiday rental on the Limestone Coast.

- Make an informed decision as to whether the property is suitable for their family's holiday needs in terms of location, amenities, price.
- Make a booking.

The following Opportunities/Problems table was drafted with the client to determine strategic priorities UX efforts should address (in this order):

| Opportunity/Problem                         | Importance     | Viablility/Feasibility  |
| ------------------------------------------- |:--------------:| -----------------------:|
| A. Increase holiday rentals                 |              5 |                       5 |
| B. Create online presence for the property  |              4 |                       4 |
| C. Increase awareness of Robe as holiday destination | 4     |                       2 |
| D. Showcase nearby attractions in Robe      |          3     |                       3 |

#### Scope

##### Functional Specifications

In considering the functional specifications, I analyzed the key functions of successful holiday rental websites, including AirBNB, Booking.com, Trivago. I found the below features essential.

Feature Set:

- see the amenities of the house.
- locate the property on a map.
- see the sleeping capacity and room configuration.
- see the nightly rate.
- see reviews from past holiday tenants.
- make a booking.
- be directed to relevant social links.
- make an enquiry for further information.

##### Content Requirements

In order to provide the value of the above functions, the following content is required:

- Images of the interior and exterior of the property, as well as nearby beaches.
- Embedded Google Map showing the property location and surrounding area.
- Icons (Font Awesome, Material Icons) to visually aide the user.
- User Form to allow enquiries.
- Text for previous tenant reviews and property description.
- Button to allow bookings to be made. The button directs the user to the real [booking site](https://www.bookrobeaccommodation.com.au/accommodation/3).

#### Structure

##### Interaction Design

Given the simple, informational nature of the content, a single page structure is most appropriate. The content is all on one continuous page to encourage (particularly mobile-users) to view all of the content easily without having to click around i.e. to prevent cognitive overload. A navigation bar is provided (which collapses into a toggler) to allow the user to quickly jump to a specific section. The Call To Action is the 'MAKE BOOKING' button in the navigation bar.

Consistency & Predictability:

Users of holiday rental sites are are extrememly accustomed to following appropriate visual icons/cues to guide them. Icons have been employed consistent with those used in other booking sites to take advantage of this - icons such as Bedroom, TV, Wifi, GPS Pin to represent location etc. Web and mobile users are accustomed to a top navbar whose items collapse into a 'burger icon' on mobile devices.

Feedback:

Navigation and social links change colour on hover, which shows users that they are clickable. The Enquiry user form requires that all fields (Name, Email, Enquiry) are populated, and alerts the user to any fields which require attention e.g. an email address without a '@' symbol. Once the submit button is clicked, a modal is shown to provide feedback to the user that their enquiry was sent successfully.

##### Information Architecture

Due to the low complexity and low amount of content, the architecture employed is single page, including several links to external websites (social links, booking website).

The organising principle and order of the content is tied to the user needs - Property Features, Explore, Contact, Reviews. The first section the user is presented with is images and features of the house itself. Following this, the Explore section which includes the Google Map location. The Enquiry section with user form then follows, as this is the point in the user's visit where any information not yet provided can be asked for. Finally, the user can read reviews to encourage a Call to Action (Make Booking).  

#### Skeleton

##### Wireframes

Two sets of wireframes were created in the early development stage to help setout the content and layout in differing device sizes. Mobile-first were created initially, then wireframes for larger device and desktop users.

[Mobile Wireframes](Mobile_Wireframes.jpeg)

[Desktop Wireframes](Desktop_Wireframes.jpeg)

#### Surface

The shade of blue was chosen as the dominant colour to convey a relaxed, sea-side feel.
Background images of the cove, sea, and green seaside vegetation were also used for this purpose.

### User Stories
<!-- Story of how a user interacts with a system in some way -->
- User 1 - "As a user with limited mobility I would like to see if the property is close to the main street. "
- User 2 - "As a user with limited speech, I would like to be able to enquire further without having to make a phone call."
- User 3 - "As a user from outside Australia, I would like to be able to locate the town in relation to Australia."
- User 4 - "As a user with a keen interest in dining, I would like to know if there are decent restaurants and pubs in walking distance?"
- User 5 - "As a user with a very limited budget, I would like to be able to see the nightly rates."

- User 1's needs are met by the inclusion of an embedded Google Map.
- User 2's needs are met by the ability to request further information via the text form.
- User 3's needs are met by the inclusion of the map in the Explore section.
- User 4's needs are met by the inclusion of What to Eat external link in the Explore section.
- User 5's needs are met by showing the approximate nightly price as well as an external link to the Seasonal Rates.

## Features

### Existing Features

- Feature 1: Carousel of images of inside & outside the cottage, and Robe surrounds.
- Feature 2: Amenities list and sleeping arrangements diagram.
- Feature 3: Google Map of cottage location.
- Feature 4: Contact Form for further enquiries.
- Feature 5: Booking button.
- Feature 6: Reviews from previous tenants.
- Feature 7: Explore links (Getting Here, Tourist Map, What to Do, What to Eat).
- Feature 7: Social Links to official Robe Tourism pages and Robe Coastal Holidays website.

### Features Left to Implement

Potential Feature 1 - Current and forecast weather conditions.

Potential Feature 2 - Livestream of Robe main beach.

Potential Feature 3 - Currently the data entered into the Enquiry form isn't sent anywhere - a simple 'Thank you' modal is shown. Ideally this data should be sent to an email address or server database.

## Technologies Used

- [HTML5](https://www.w3.org/html) : used for page structure.
- [CSS3](https://www.w3.org/Style/CSS/Overview.en.html) : styling language.
- [Bootstrap](https://getbootstrap.com) : responsive, mobile-first framework.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) : used for to show modal on form submission, dynamically resize navbar height
- [Git](https://git-scm.com/) : used for version control.
- [GitHub](https://github.com) : used to host code repository and to deploy project (via GitHub Pages).
- [VSCode](https://code.visualstudio.com) : preferred text editor.
- [Favicon Generator](https://www.favicon-generator.org) : used to create a 16x16 icon, displayed next to page title.
- [FontAwesome](https://fontawesome.com) : used for icons.
- [Material Icons](https://material.io/resources/icons) : used for icons.
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) : used extensively to ensure device responsiveness.
- [Paint S](https://apps.apple.com/us/app/paint-s/id736473980?mt=12) : used for wireframe development.
- [Adobe Lightroom](https://lightroom.adobe.com/) : used to edit images.
- [W3C Validator](https://jigsaw.w3.org) : used to validate HTML & CSS.
- [Autoprefixer CSS Online](https://autoprefixer.github.io/) : used to add vendor prefixes.

## Testing

Chrome Developer Tools were used extensively during development. In particular the ability to review the responsiveness of the site on a wide variety of device sizes. The Chrome Developer Audit tool, "Lighthouse" was used to test Performace, Accessibility, Best Practices.

The site was tested successfully on the following browsers: Firefox, Chrome, Safari and the following physical devices: OnePlus 5 (Android), iPhone 7 (iOS)

Manual testing involved clicking through all the links from different locations on the page, on all device sizes to ensure responsiveness. External links were also tested to ensure they were opened in a new tab (ie target="_blank").

During my Mid-Project review session, my mentor advised that I use 100% width for the Enquiry form inputs on mobile devices. It was also advised to replace curved border style for the section headings with straight corners. My mentor advised this would help to avoid the user thinking they were clickable buttons.

## Deployment

The site was deployed on GitHub Pages, by following the below steps:

- Selected Repository on github.com
- "Settings" > "Github Pages"
- Selected "Master Branch" from the "Source" dropdown box.
- Notification: "Github Pages source saved"
- Notification: "Your site was published at [https://tdunn891.github.io/milestone-1/](https://tdunn891.github.io/milestone-1/)"

## Credits

### Content

The text for Explore section was written by Liz Harfull: [Robe History](http://www.robe.com.au/history-1)

The Explore links (Getting Here, Tourist Map, What to Do, What to Eat) direct the user to pages on the official [Robe Tourism](http://robe.com.au) website.

### Media

The following images of the inside of the house were obtained from [Book Robe Accomodation](http://www.bookrobeaccommodation.com.au/accommodation/3):

- [Living Space](https://www.bookrobeaccommodation.com.au/database/images/3_23.jpg)
- [Living Space Reverse](https://www.bookrobeaccommodation.com.au/database/images/3_24.jpg)
- [Two Beds](https://www.bookrobeaccommodation.com.au/database/images/3_210.jpg)

Map showing Robe's location in relation to Australia obtained from [Robe Tourism](http://robe.com.au) website.

### Acknowledgements

Thank you to my father and grandmother for providing useful input.
