interface ErrorProps {
    type: 'email' | 'password' | 'network' | 'server' | 'success' | 'name';
    message: string;
}

function Error({ type, message }: ErrorProps) {
    const getColor = () => {
        switch (type) {
            case 'email':
            case 'password':
            case 'server':
            case 'network':
            case 'name':
                return 'bg-red-100 border-red-400 text-red-700';
            case 'success':
                return 'bg-green-100 border-green-400 text-green-700';
            default:
                return 'bg-gray-100 border-gray-400 text-gray-700';
        }
    };

    return (
        <div className={`${getColor()} border text-md px-4 py-3 rounded-md`}>
            <p>{message}</p>
        </div>
    );
}

export default Error;