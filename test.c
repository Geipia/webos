#include <windows.h>
#include <commctrl.h>

// Identifiants pour les éléments de menu
#define IDM_NOTE_NEW 1
#define IDM_NOTE_OPEN 2
#define IDM_NOTE_SAVE 3
#define IDM_EXIT 4

LRESULT CALLBACK WindowProcedure(HWND, UINT, WPARAM, LPARAM);

void AddMenus(HWND);

int WINAPI WinMain(HINSTANCE hInst, HINSTANCE hPrevInst, LPSTR args, int ncmdshow) {
    WNDCLASSW wc = {0};
    wc.hbrBackground = (HBRUSH)COLOR_WINDOW;
    wc.hCursor = LoadCursor(NULL, IDC_ARROW);
    wc.hInstance = hInst;
    wc.lpszClassName = L"myWindowClass";
    wc.lpfnWndProc = WindowProcedure;

    if (!RegisterClassW(&wc)) {
        return -1;
    }

    CreateWindowW(L"myWindowClass", L"Mon Bloc-Note", WS_OVERLAPPEDWINDOW | WS_VISIBLE,
                  100, 100, 500, 400, NULL, NULL, NULL, NULL);

    MSG msg = {0};
    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    return 0;
}

LRESULT CALLBACK WindowProcedure(HWND hWnd, UINT msg, WPARAM wp, LPARAM lp) {
    switch (msg) {
        case WM_CREATE:
            AddMenus(hWnd);
            break;
        case WM_COMMAND:
            switch (wp) {
                case IDM_NOTE_NEW:
                    // Code pour créer une nouvelle note
                    break;
                case IDM_NOTE_OPEN:
                    // Code pour ouvrir une note existante
                    break;
                case IDM_NOTE_SAVE:
                    // Code pour sauvegarder une note
                    break;
                case IDM_EXIT:
                    DestroyWindow(hWnd);
                    break;
            }
            break;
        case WM_DESTROY:
            PostQuitMessage(0);
            break;
        default:
            return DefWindowProcW(hWnd, msg, wp, lp);
    }
    return 0;
}

void AddMenus(HWND hWnd) {
    HMENU hMenubar = CreateMenu();
    HMENU hMenu = CreateMenu();

    AppendMenuW(hMenu, MF_STRING, IDM_NOTE_NEW, L"&Nouvelle Note");
    AppendMenuW(hMenu, MF_STRING, IDM_NOTE_OPEN, L"&Ouvrir Note");
    AppendMenuW(hMenu, MF_STRING, IDM_NOTE_SAVE, L"&Sauvegarder Note");
    AppendMenuW(hMenu, MF_STRING, IDM_EXIT, L"&Quitter");

    AppendMenuW(hMenubar, MF_POPUP, (UINT_PTR)hMenu, L"&Fichier");
    SetMenu(hWnd, hMenubar);
}
