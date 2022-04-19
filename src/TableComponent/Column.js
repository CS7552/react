// import Columnfilter from './Columnfiltering'
export const COLUMNS = [
    {
        Header:'Id',
        accessor:'id',
        Footer:'Id',
        sticky:true
    },
    {
        Header:'Album Id',
        accessor:'albumId',
        Footer:'Album Id',
    },
    {
        Header:'Title',
        accessor:'title',
        Footer:'Title',
    },
    {
        Header:'Url',
        accessor:'url',
        Footer:'Url',
        disableFilters:true
    },
    {
        Header:'Thumbnail Url',
        accessor:'thumbnailUrl',
        Footer:'Thumbnail Url',
        disableFilters:true
    },
]

// export const GROUPRD_COLUMNS = [
//     {
//         Header:'ID',
//         Footer:'ID',
//         Columns:[
//             {
//                 Header:'Id',
//                 Footer:'Id',
//                 accessor:'id'
//             },
//             {
//                 Header:'Album Id',
//                 Footer:'Album Id',
//                 accessor:'albumId'
//             }
//         ]
//     },
//     {
//         Header:'Title',
//         Footer:'Title',
//         accessor:'title',
//     },
//     {
//         Header:'Image Url',
//         Footer:'Image Url',
//         Columns:[
//             {
//                 Header:'Url',
//                 Footer:'Url',
//                 accessor:'url',
//             },
//             {
//                 Header:'Thumbnail Url',
//                 Footer:'Thumbnail Url',
//                 accessor:'thumbnailUrl'
//             }
//         ]
//     }
// ]