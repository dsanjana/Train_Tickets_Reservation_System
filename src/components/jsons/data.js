export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];

export const flavourOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];

export const stateOptions = [
    { id:'1', value: 'AL', label: 'Kandy' },
    { id:'2', value: 'AK', label: 'Pettah' },
    { id:'3', value: 'AS', label: 'American Samoa' },
    { id:'4', value: 'AZ', label: 'Arizona' },
    { id:'5', value: 'AR', label: 'Arkansas' },
    { id:'6', value: 'CA', label: 'California' },
    { id:'7', value: 'CO', label: 'Colorado' },
    { id:'8', value: 'CT', label: 'Connecticut' },
    { id:'9', value: 'DE', label: 'Delaware' },
    { id:'10', value: 'DC', label: 'District Of Columbia' },
    { id:'11', value: 'FM', label: 'Federated States Of Micronesia' },
    { id:'12', value: 'FL', label: 'Florida' },
    { id:'13', value: 'GA', label: 'Georgia' },
    { id:'14', value: 'GU', label: 'Guam' },
    { id:'15', value: 'HI', label: 'Hawaii' },
    { id:'16', value: 'ID', label: 'Idaho' },
    { id:'17', value: 'IL', label: 'Illinois' },
    { id:'18', value: 'IN', label: 'Indiana' },
    { id:'19', value: 'IA', label: 'Iowa' },
    { id:'20', value: 'KS', label: 'Kansas' },
    { id:'21', value: 'KY', label: 'Kentucky' },
    { id:'22', value: 'LA', label: 'Louisiana' },
    { id:'23', value: 'ME', label: 'Maine' },
    { id:'24', value: 'MH', label: 'Marshall Islands' },
    { id:'25', value: 'MD', label: 'Maryland' },
    { id:'26', value: 'MA', label: 'Massachusetts' },
    { id:'27', value: 'MI', label: 'Michigan' },
    { id:'28', value: 'MN', label: 'Minnesota' },
    { id:'29', value: 'MS', label: 'Mississippi' },
    { id:'30', value: 'MO', label: 'Missouri' },
    { id:'31', value: 'MT', label: 'Montana' },
    { id:'32', value: 'NE', label: 'Nebraska' },
    { id:'33', value: 'NV', label: 'Nevada' },
    { id:'34', value: 'NH', label: 'New Hampshire' },
    { id:'35', value: 'NJ', label: 'New Jersey' },
    { id:'36', value: 'NM', label: 'New Mexico' },
    { id:'37', value: 'NY', label: 'New York' },
    { id:'38', value: 'NC', label: 'North Carolina' },
    { id:'39', value: 'ND', label: 'North Dakota' },
    { id:'40', value: 'MP', label: 'Northern Mariana Islands' },
    { id:'41', value: 'OH', label: 'Ohio' },
    { id:'42', value: 'OK', label: 'Oklahoma' },
    { id:'43', value: 'OR', label: 'Oregon' },
    { id:'44', value: 'PW', label: 'Palau' },
    { id:'45', value: 'PA', label: 'Pennsylvania' },
    { id:'46', value: 'PR', label: 'Puerto Rico' },
    { id:'47', value: 'RI', label: 'Rhode Island' },
    { id:'48', value: 'SC', label: 'South Carolina' },
    { id:'49', value: 'SD', label: 'South Dakota' },
    { id:'50', value: 'TN', label: 'Tennessee' },
    { id:'51', value: 'TX', label: 'Texas' },
    { id:'52', value: 'UT', label: 'Utah' },
    { id:'53', value: 'VT', label: 'Vermont' },
    { id:'54', value: 'VI', label: 'Virgin Islands' },
    { id:'55', value: 'VA', label: 'Virginia' },
    { id:'56', value: 'WA', label: 'Washington' },
    { id:'58', value: 'WV', label: 'West Virginia' },
    { id:'59', value: 'WI', label: 'Wisconsin' },
    { id:'60', value: 'WY', label: 'Wyoming' },
];

export const optionLength = [
    { value: 1, label: 'general' },
    {
        value: 2,
        label:
            'Evil is the moment when I lack the strength to be true to the Good that compels me.',
    },
    {
        value: 3,
        label:
            "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
    },
];

export const dogOptions = [
    { id: 1, label: 'Kandy' },
    { id: 2, label: 'Pettah' },
    { id: 3, label: 'Dachshund' },
    { id: 4, label: 'Akita' },
];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }

export const groupedOptions = [
    {
        label: 'Colours',
        options: colourOptions,
    },
    {
        label: 'Flavours',
        options: flavourOptions,
    },
];