
const supabaseUrl = 'https://iajbxcngwlujimjfrtwp.supabase.co' // Замените на ваш URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhamJ4Y25nd2x1amltamZydHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1MTQ5OTIsImV4cCI6MjA0MjA5MDk5Mn0.lIlD4lg6uBHmSD2_WSZ0jGrtXdpfqXoaB4ZPdLn-NVM' // Замените на ваш ключ
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

export default supabaseClient;