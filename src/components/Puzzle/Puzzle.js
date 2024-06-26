
/*Next Steps: Leverage Express Routes and Database
*/
const puzzles = {
    '0-0': {
    //6 Step Levels
        '0-0': ['2-0','2-2','2-4'],
        '0-1': ['0-0','0-2','0-4',
                '1-0','1-2','1-4',
                '3-0','3-2','3-4',
                '4-0','4-2','4-4'],
        '0-2': ['0-1','0-3',
                '1-0','1-1','1-3','1-4',
                '2-0','2-1','2-3','2-4',
                '3-0','3-1','3-3','3-4',
                '4-1','4-3'],
        '0-3': ['1-0','1-1','1-3','1-4',
                '3-0','3-4',
                '4-0','4-1','4-3','4-4'],
        '0-4': ['0-0','0-1','0-2','0-3',
                '1-0','1-1','1-2','1-4',
                '2-0','2-1','2-2','2-4',
                '3-3','3-4',
                '4-0','4-1','4-3','4-4'],
        //7 Step Levels,
        '1-0': ['2-0','2-2','2-4',
                '3-0','3-2','3-4',
                '4-1','4-2','4-3'],
        '1-1': ['0-0','0-1','0-2','0-3',
                '1-0','1-4',
                '2-0','2-4',
                '3-0','3-4',
                '4-0','4-1','4-2','4-3'],
        '1-2': ['1-2',
                '2-1','2-3',
                '3-0','3-2','3-4',
                '4-1','4-3'],
        '1-3': ['0-1','0-3',
                '1-0','1-1','1-2','1-3','1-4',
                '2-1','2-2','2-3',
                '3-1','3-3','3-4',
                '4-0','4-1','4-2'],
        '1-4': ['0-1','0-2','0-3',
                '1-1','1-2','1-3',
                '2-1','2-2','2-3'],
        //8 Step Levels
        '2-0': ['0-0','0-2','0-4',
                '1-0','1-2','1-4',
                '2-0','2-2','2-4',
                '3-0','3-2','3-4',
                '4-1','4-2','4-3'],
        '2-1': ['0-0','0-1','0-2','0-3','0-4',
                '1-1','1-3',
                '2-0','2-1','2-3','2-4',
                '3-1','3-2','3-3',
                '4-1','4-3'],
        '2-2': ['0-3',
                '1-2','1-4',
                '2-1','2-3',
                '3-0','3-2',
                '4-1'],
        '2-3': ['2-1',
                '3-1', 
                '4-1'],
        '2-4': ['1-1',
                '3-1'],
        //9 Step Levels
        '3-0': ['0-0',
                '1-0',
                '2-0',
                '3-0',
                '4-0', '4-1', '4-2', '4-3', '4-4'],
        '3-1': ['2-2',
                '3-1', '3-2', '3-3',
                '4-0', '4-1', '4-2', '4-3', '4-4'],
        '3-2': ['0-2',
                '1-1', '1-3',
                '2-0', '2-2', '2-4',
                '3-1', '3-3',
                '4-2'],
        '3-3': ['0-0', '0-2', '0-4',
                '2-0', '2-2', '2-4',
                '4-0', '4-2', '4-4'],
        '3-4': ['2-0','2-4'],
        //10 Step Levels
        '4-0': ['0-1', '0-2', '0-3', '0-4',
                '1-1',
                '2-1', '2-2', '2-3',
                '3-1',
                '4-1'],
        '4-1': ['0-1', '0-2', '0-3',
                '1-0', '1-4',
                '2-0', '2-4',
                '3-0', '3-4',
                '4-1', '4-2', '4-3'],
        '4-2': ['2-2', '2-3', '2-4',
                '3-2', '3-3',
                '4-2'],
        '4-3': ['2-0', '2-4',
                '3-0', '3-1', '3-2', '3-3', '3-4',
                '4-1', '4-4'],
        '4-4': ['0-0',
                '1-0', '1-1',
                '2-0', '2-1', '2-2',
                '3-0', '3-1', '3-2', '3-3',
                '4-1', '4-2', '4-3', '4-4'],
        },
                //All Puzzles Above are Completed
                //All Puzzles Below Are Incomplete
    '0-1': {
    //11 Step Levels
        '0-0': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '0-1': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '0-2': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '0-3': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '0-4': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        //12 Step Levels
        '1-0': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '1-1': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '1-2': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '1-3': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '1-4': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        //13 Step Levels
        '2-0': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '2-1': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '2-2': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '2-3': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '2-4': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        //14 Step Levels
        '3-0': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '3-1': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '3-2': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '3-3': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '3-4': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        //15 Step Levels
        '4-0': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '4-1': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '4-2': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '4-3': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4',],
        '4-4': ['0-0','0-1','0-2','0-3','0-4',
                '1-0','1-1','1-2','1-3','1-4',
                '2-0','2-1','2-2','2-3','2-4',
                '3-0','3-1','3-2','3-3','3-4',
                '4-0','4-1','4-2','4-3','4-4'],
            },
        
        '4-3': {
            // Empty
            '4-3': [],
            // One Click-Win
            '4-4': ['0-0','1-0','0-1']
        },
        //opening sequence
    '4-4': {
    '4-4': ['0-0','1-0','2-0','3-0','4-0',
            '4-1','4-2','4-3','4-4','3-4',
            '2-4','1-4','0-4','0-3','0-2',
            '0-1','1-1','2-1','3-1','3-2',
            '3-3','2-3','1-3','1-2','2-2']
        }


    }

 export default puzzles;
