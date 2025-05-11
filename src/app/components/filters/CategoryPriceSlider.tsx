import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CategoryPriceSlider = () => {

    const [value, setValue] = React.useState<number[]>([2, 90]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Box sx={{margin: 'auto', mt: 6 }}>
            <Typography variant="h6" gutterBottom>
                Filter By Price
            </Typography>

            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                sx={{
                    color: '#222', // màu chính của track và thumb
                    '& .MuiSlider-thumb': {
                    backgroundColor: '#222', // màu nút tròn
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: '0px 0px 0px 8px rgba(107, 114, 128, 0.2)', // hiệu ứng hover/focus
                    },
                    },
                    '& .MuiSlider-track': {
                    border: 'none',
                    },
                    '& .MuiSlider-rail': {
                    opacity: 0.3,
                    backgroundColor: '#878787', // màu phần chưa chọn
                    },
                    '& .MuiSlider-valueLabel': {
                    backgroundColor: '#6b7280', // nền nhãn
                    color: '#fff',
                    },
                }}
            />

            <Typography sx={{ mt: 2 }}>
                Price: ${value[0]} – ${value[1]}
            </Typography>
        </Box>
    )
}

export default CategoryPriceSlider