'use client';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import * as xpActions from '@/redux/features/xpSlice';

export default function XpStateReset() {
    const dispatch = useDispatch();

    // RESET GLOBAL STATE THAT COLORS LOGO AND XP SUMMARY ON CAREER PAGE
    useEffect(() => {
        dispatch(xpActions.reset());
    }, [dispatch]);
}