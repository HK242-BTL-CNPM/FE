export const rooms = [
    { id: 'A01', type: 'Phòng cá nhân', status: 'ĐÃ ĐẶT', time: '11:00 - 12:00' },
    { id: 'B01', type: 'Phòng mentor 1 - 1', status: 'TRỐNG', time: '-- : --' },
    { id: 'C01', type: 'Phòng học nhóm', status: 'TRỐNG', time: '-- : --' },
    { id: 'D01', type: 'Phòng thuyết trình', status: 'KHÓA', time: '-- : --' },
    { id: 'A02', type: 'Phòng cá nhân', status: 'ĐANG SỬ DỤNG', time: '7:00 - 9:00' },
    { id: 'A03', type: 'Phòng cá nhân', status: 'ĐANG SỬ DỤNG', time: '7:00 - 9:00' },
    { id: 'B02', type: 'Phòng mentor 1 - 1', status: 'ĐANG SỬ DỤNG', time: '7:00 - 9:00' },
    { id: 'C02', type: 'Phòng học nhóm', status: 'ĐÃ ĐẶT', time: '7:00 - 9:00' }
  ];
  export const roomStatuses = [
    "Tất cả",
    "Trống",
    "Khóa",
    "Đã đặt",
    "Đang sử dụng",
  ];
  export const statusColor = {
    'TRỐNG': 'bg-green-200 text-green-800',
    'KHÓA': 'bg-purple-200 text-purple-800',
    'ĐÃ ĐẶT': 'bg-yellow-200 text-yellow-800',
    'ĐANG SỬ DỤNG': 'bg-sky-200 text-sky-800'
  };
  
  export const roomTypes = [
    "Tất cả phòng",
    "Phòng cá nhân",
    "Phòng mentor 1-1",
    "Phòng học nhóm",
    "Phòng thuyết trình",
  ];
  

  